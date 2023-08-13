import { createContext, useContext, useReducer, } from "react";
import reducer from "../reducer/ProfileReducer";
import axios from "axios";

const ProfileContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
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

            this is an errororor

        }
}

