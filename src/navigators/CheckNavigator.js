import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Check from '../components/Check';
import MainHeader from '../components/MainHeader';

const CheckNavigator = createStackNavigator(
    {
        Check: Check,
    },
    {
        initialRouteName: 'Check',
        navigationOptions: ({ navigation }) => {
            return ({
                header: (props) => (navigation.state.index == undefined ? <MainHeader {...props} title='Check' /> : null)
            })
        },
    }
);

/* Hides the tab bar when switching to another navigator */
CheckNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
export default CheckNavigator;