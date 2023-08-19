import { createContext, useContext, useReducer, } from "react";
import reducer from "../reducer/ProfileReducer";
import axios from "axios";

const SingleContext = createContext();

const initialState = {
    singleData: {},
}
