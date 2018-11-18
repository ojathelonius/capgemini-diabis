import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Board from '../components/Board';
import MainHeader from '../components/MainHeader';

const BoardNavigator = createStackNavigator(
    {
        Board: Board,
    },
    {
        initialRouteName: 'Board',
        navigationOptions: ({ navigation }) => {
            return ({
                header: (props) => (navigation.state.index == undefined ? <MainHeader {...props} title='Board' /> : null)
            })
        },
    }
);

/* Hides the tab bar when switching to another navigator */
BoardNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
export default BoardNavigator;