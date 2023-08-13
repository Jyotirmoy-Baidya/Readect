
const ProfileReducer = (state, action) => {
    //LOGIN REDUCER
    if (action.type === "LOGIN_SUCCESS") {
        return {
            ...state,
            isError: false,
        }
    }

    else if (action.type === "API_ERROR") {
        return {
            ...state,
            isError: true,
            errorMsg: action.payload,
        }
    }

    //CHECK LOGGED IN
    else if (action.type === "LOGGED_IN") {
        return {
            ...state,
            loggedInStatus: true,
        }
    }

    //NOT LOGGED IN
    else if (action.type === "LOGOUT") {
        return {
            ...state,
            loggedInStatus: false,
        }


    }
}

export default ProfileReducer;