import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from '../components/Home';
import MainHeader from '../components/MainHeader';

const HomeNavigator = createStackNavigator(
    {
        Home: Home,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: ({ navigation }) => {
            return ({
                header: (props) => (navigation.state.index == undefined ? <MainHeader {...props} title='Home' /> : null)
            })
        },
    }
);

/* Hides the tab bar when switching to another navigator */
HomeNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
export default HomeNavigator;