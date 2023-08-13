import { createContext, useContext, useReducer, } from "react";
import reducer from "../reducer/ProfileReducer";
import axios from "axios";

const ProfileContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    loggedInStatus: false,
    profile: {},
    myPoems: [],
    myArticles: [],
    myShortStories: [],
    myBooks: [],
    readLater: [],
}

const ProfileProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);;

    //login using axios
    const login = async (url, body) => {
        try {
            const resp = await axios.post(url, JSON.stringify(body),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            dispatch({ type: "LOGIN_SUCCESS" });
            return false;
        }
        catch (error) {
            console.log(error);
            dispatch({ type: "API_ERROR", payload: error });
            return error.response.data.message;
        }
    };

    //Registration using axios
    const register = async (url, body) => {
        try {
            const resp = await axios.post(url,
                JSON.stringify(body),
                {
                    headers: { 'Content-type': 'application/json' },
                    withCredentials: true
                }
            );
            dispatch({ type: "LOGIN_SUCCESS" });
            return false;
        } catch (err) {
            dispatch({ type: "API_ERROR", payload: err });
            return err.response.data.message;
        }
    }

    //Check if logged in
    const checkLogin = async (url) => {
        try {
            const resp = await axios.get(url);
            console.log(resp);
            if (resp.data.status === "Success") {
                dispatch({ type: "LOGGED_IN" });
            }
            else {
                dispatch({ type: "API_ERROR", payload: resp.data.message });
            }
        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error });
        }
    }

    //logout
    const logout = async (url) => {
        try {
            console.log(url);
            console.log(resp);
            const resp = await axios.post(url);
            dispatch({ type: "LOGGED_OUT" });
            return false;
        }
        catch (err) {
            dispatch({ type: "API_ERROR", payload: err });
        }
    }

    return <ProfileContext.Provider value={{ ...state, login, register, checkLogin, logout }}>
        {children}
    </ProfileContext.Provider>
};

//custom hooks
const useProfileContext = () => {
    return useContext(ProfileContext);
}

export { ProfileProvider, ProfileContext, useProfileContext };

