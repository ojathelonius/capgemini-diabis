import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Play from '../components/Play';
import MainHeader from '../components/MainHeader';

const PlayNavigator = createStackNavigator(
    {
        Play: Play,
    },
    {
        initialRouteName: 'Play',
        defaultNavigationOptions: ({ navigation }) => {
            return ({
                header: (props) => (navigation.state.index == undefined ? <MainHeader {...props} title='Play' /> : null)
            })
        },
    }
);

/* Hides the tab bar when switching to another navigator */
PlayNavigator.defaultNavigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
export default createAppContainer(PlayNavigator);