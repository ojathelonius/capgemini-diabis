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
                    fontSize: 13,
                    textAlign: 'center',
                    color: '#7F5F41'
                } : {
                        fontSize: 9,
                        textAlign: 'center',
                        color: '#7F5F41'
                    };

                const viewStyle = {
                    justifyContent: 'center',
                    alignItems: 'center'
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
                    fontSize: 29,
                    color: '#7F5F41'
                } : {
                        fontSize: 24,
                        color: '#7F5F41',
                        textAlign: 'center'
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
                    borderTopColor: '#7F5F41',
                    height: 55,
                    backgroundColor: '#FFF9F2'
                }
            },
    }
);