const reviewReducer = (state = [], action) => {
    if (action.type === 'SET_REVIEW'){
        return action.payload;
    }
    return state;
}

export default reviewReducer;