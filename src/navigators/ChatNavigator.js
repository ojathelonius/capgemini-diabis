import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Chat from '../components/Chat';
import MainHeader from '../components/MainHeader';

const ChatNavigator = createStackNavigator(
    {
        Chat: Chat,
    },
    {
        initialRouteName: 'Chat',
        navigationOptions: ({ navigation }) => {
            return ({
                header: (props) => (navigation.state.index == undefined ? <MainHeader {...props} title='Chat with Woopy' /> : null)
            })
        },
    }
);

/* Hides the tab bar when switching to another navigator */
ChatNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
export default ChatNavigator;