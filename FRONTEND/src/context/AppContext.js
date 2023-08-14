import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/AppReducer"
import axios from "axios";


const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    starredContent: [],
    poems: [],
    articles: [],
    shortStories: [],
    allContents: [],
    books: [],
    // isSingleLoading: false,
    // singlePoem: {},
    // comments: [],
    // profile: {},
    // userId: "",
    // isLogin: false,
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getAllPoems = async (url, searchBox) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const resp = await axios.get(url);
            console.log(resp);
            dispatch({ type: "MY_ALL_POEMS", payload: resp.data.poems })
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    //Get All Article with axios
    const getAllArticles = async (url, searchBox) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const resp = await axios.get(url);
            console.log(resp);
            dispatch({ type: "MY_ALL_ARTICLES", payload: resp.data.articles })
        }
        catch (err) {
            dispatch({ type: "API_ERROR" });
        }
    }

    //Get All ShortStories with axios
    const getAllShortStories = async (url, searchBox) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const resp = await axios.get(url);
            console.log(resp);
            dispatch({ type: "MY_ALL_SHORTSTORIES", payload: resp.data.shortStories })
        } catch (e) {
            dispatch({ type: "API_ERROR" });
        };
    }

    //Get All Books With Axios
    const getAllBooks = async (url, searchBox) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const resp = await axios.get(url);
            console.log(resp);
            dispatch({ type: "MY_ALL_BOOKS", payload: resp.data.books })
        } catch (e) {
            dispatch({ type: "API_ERROR" });
        };
    }

    //Get All Contents With Axios
    const getAllContents = async (url, searchBox) => {

    }



    //my single poem
    const getSinglePoem = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const resp = await axios.get(url);
            const poem = await resp.data;
            dispatch({ type: "MY_SINGLE_POEM", payload: poem.poem })
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

    //Get User ID
    const getUserId = async (url) => {
        try {
            const resp = await axios.get("/api/v1/reader/UserID");
            const UserId = await resp.data;
            dispatch({ type: "USER_ID", payload: UserId });
        }
        catch (err) {
            console.log(err);
        }
    }

    //untill and unless we pass the single rproduct beside state we will not be able to call through the single url
    return <AppContext.Provider value={{ ...state, getAllPoems, getAllArticles, getAllBooks, getAllShortStories, getSinglePoem, getPoemComments }}>
        {children}
    </AppContext.Provider>
};

// custom hooks
const useAppContext = () => {
    return useContext(AppContext);
}



export { AppProvider, AppContext, useAppContext };