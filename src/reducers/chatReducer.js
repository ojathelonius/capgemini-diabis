const initialState = {
    messages: [],
    context: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case 'UPDATE_CONTEXT':
            return {
                ...state,
                context: action.payload
            }
        default:
            return state
    }
}

export default appReducer;