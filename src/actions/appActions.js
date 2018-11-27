import * as Expo from "expo";

export const startLoadingResources = () => ({
    type: 'START_LOADING_RESOURCES'
})

export const resourcesLoaded = () => ({
    type: 'RESOURCES_LOADED'
})

export const toggleMeasureModal = () => ({
    type: 'TOGGLE_MEASURE_MODAL'
})

export const toggleMealModal = () => ({
    type: 'TOGGLE_MEAL_MODAL'
})

export const closeMeasureModal = () => ({
    type: 'CLOSE_MEASURE_MODAL'
})

export const closeMealModal = () => ({
    type: 'CLOSE_MEAL_MODAL'
})


export const loadResources = () => (async (dispatch) => {

    dispatch(startLoadingResources());

    await Expo.Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Arial: require("../../assets/fonts/Arial.ttf"),
        Luna: require("../../assets/fonts/Luna.ttf")
    });

    Expo.SplashScreen.hide();

    dispatch(resourcesLoaded());

})
