const initialState = {
    messages: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_MESSAGES':
            return {
                ...state
            }
        case 'RECEIVE_MESSAGES':
            return {
                ...state,
                messages: action.payload.messages
            }
        default:
            return state
    }
}

export default appReducer;