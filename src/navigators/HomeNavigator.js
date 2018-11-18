import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/Home';
import MainHeader from '../components/MainHeader';

const HomeNavigator = createStackNavigator(
    {
        Home: Home,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => {
            return ({
                header: (props) => (navigation.state.index == undefined ? <MainHeader {...props} title='Home' /> : null)
            })
        },
    }
);

/* Hides the tab bar when switching to another navigator */
HomeNavigator.defaultNavigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
export default createAppContainer(HomeNavigator);