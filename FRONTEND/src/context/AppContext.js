import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/AppReducer"
import axios from "axios";


const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    searchContent: [],
    allContents: [],
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //Get All Contents with Axios
    const getAllContents = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const resp = await axios.get(url);
            console.log(resp);
            dispatch({ type: "GET_CONTENTS", payload: resp.data.data });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    //Get Search 
    const getSearchContents = async (search) => {
        dispatch({ type: "SET_LOADING" })
        try {
            dispatch({ type: "GET_SEARCH", payload: search });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    //my single poem
    const getSinglePoem = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const resp = await axios.get(url);
            const poem = await resp.data;
            dispatch({ type: "MY_SINGLE_POEM", payload: poem.data })
        } catch (error) {
            dispatch({ type: "SINGLE_API_ERROR" });
        }
    }


    //All Poem Comments
    const getPoemComments = async (url, i) => {
        dispatch({ type: "SET_COMMENTS_LOADING" })
        try {
            const resp = await axios.get(url);
            let comments = await resp.data;
            console.log(comments);

            comments = comments.data.reviews[0].comments;
            dispatch({ type: "POEM_COMMENTS", payload: comments, num: i })
        } catch (error) {
            dispatch({ type: "COMMENTS_ERROR" });
        }
    }


    //untill and unless we pass the single rproduct beside state we will not be able to call through the single url
    return <AppContext.Provider value={{ ...state, getAllContents, getSinglePoem, getPoemComments, getSearchContents }}>
        {children}
    </AppContext.Provider>
};

// custom hooks
const useAppContext = () => {
    return useContext(AppContext);
}



export { AppProvider, AppContext, useAppContext };