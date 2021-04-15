const codeReducer = (state = [], action) => {
    if (action.type === 'SET_CODE'){
        return action.payload;
    }
    return state;
}

export default codeReducer;