import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Image, Text, View } from 'react-native';
import { Icon } from 'native-base';

import HomeNavigator from './HomeNavigator';
import CheckNavigator from './CheckNavigator';
import PlayNavigator from './PlayNavigator';
import BoardNavigator from './BoardNavigator';
import ChatNavigator from './ChatNavigator';

export default createBottomTabNavigator(
    {
        Home: HomeNavigator,
        Check: CheckNavigator,
        Play: PlayNavigator,
        Board: BoardNavigator,
        Chat: ChatNavigator
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;

                const labelStyle = focused ? {
                    fontSize: 10,
                    textAlign: 'center',
                    color: '#FF0129'
                } : {
                        fontSize: 10,
                        textAlign: 'center',
                        color: '#676767'
                    };

                    const viewStyle = {
                        justifyContent: 'center'
                    }
                let iconSource;

                switch (routeName) {
                    case 'Home':
                        iconSource = 'home';
                        break;
                    case 'Check':
                        iconSource = 'check';
                        break;
                    case 'Play':
                        iconSource = 'gamepad';
                        break;
                    case 'Board':
                        iconSource = 'list';
                        break;
                    case 'Chat':
                        iconSource = 'comments';
                        break;  
                    default:
                        iconSource = 'home';
                }

                let iconStyle = focused ? {
                    color: '#FF0129'
                } : {
                        color: '#676767'
                    };
                return (
                    <View style={viewStyle}>
                        <Icon type="FontAwesome" name={iconSource} style={iconStyle} />
                        <Text style={labelStyle}>{routeName}</Text>
                    </View>
                );
            },
        }),
        tabBarOptions:
            {
                showLabel: false,
                style: {
                    borderTopWidth: 1,
                    borderTopColor: 'red',
                    height: 55
                }
            },
    }
);