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
                const labelStyle = {
                    fontSize: 11,
                    textAlign: 'center',
                    color: '#9B8C74'
                }

                let imgSource;

                switch (routeName) {
                    case 'Home':
                        iconSource = 'home';
                        break;
                }

                const iconStyle = focused ? {
                    color: 'red'
                } : {
                        color: 'blue'
                    }
                return
                (
                    <View>
                        <Icon type='FontAwesome' name={iconSource} style={iconStyle}></Icon>
                        <Text style={labelStyle}>{routeName}</Text>
                    </View>
                );
            },
        }),
        tabBarOptions:
            {
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    elevation: 8,
                    height: 55
                }
            },
    }
);