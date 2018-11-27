const initialState = {
    isReady: false,
    showMeasureModal: false,
    showMealModal: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESOURCES_LOADED':
            return {
                ...state,
                isReady: true
            }
        case 'TOGGLE_MEASURE_MODAL':
            return {
                ...state,
                showMeasureModal: !state.showMeasureModal
            }
        case 'TOGGLE_MEAL_MODAL':
            return {
                ...state,
                showMealModal: !state.showMealModal
            }
        case 'CLOSE_MEASURE_MODAL':
            return {
                ...state,
                showMeasureModal: false
            }
        case 'CLOSE_MEAL_MODAL':
            return {
                ...state,
                showMealModal: false
            }
        default:
            return state
    }
}

export default appReducer;