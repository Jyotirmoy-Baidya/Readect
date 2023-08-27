import { createContext, useContext, useReducer, } from "react";
import reducer from "../reducer/SingleReducer";
import axios from "axios";

const SingleContext = createContext();

const initialState = {
    isSingleLoading: false,
    singleData: {},
}

const SingleProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //UPLOAD CONTENTS
    const uploadContents=  async(url, )
}


