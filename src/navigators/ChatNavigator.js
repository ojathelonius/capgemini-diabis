import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ChatContainer from '../containers/ChatContainer';
import MainHeader from '../components/MainHeader';

const ChatNavigator = createStackNavigator(
    {
        Chat: ChatContainer,
    },
    {
        initialRouteName: 'Chat',
        defaultNavigationOptions: ({ navigation }) => {
            return ({
                header: (props) => (navigation.state.index == undefined ? <MainHeader {...props} title='Chat with Woopy' /> : null)
            })
        },
    }
);

/* Hides the tab bar when switching to another navigator */
ChatNavigator.defaultNavigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
export default createAppContainer(ChatNavigator);