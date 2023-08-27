const SingleReducer = (state, action) => {
    if (action.type === "SET_LOADING") {
        return {
            ...state,
            isSingleLoading: true,
        }
    }

    //Upload Content
    else if (action.type === "UPLOAD_SUCCESS") {
        return {
            ...state,
        }
    }

}

export default SingleReducer;