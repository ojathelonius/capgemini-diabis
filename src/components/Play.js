import React from 'react';
import { View,Image, ScrollView } from 'react-native';
import { List, Text, ListItem, Form, Item, Picker, Card, CardItem, Left, Thumbnail, Body, Right, Button, Icon } from 'native-base';

class Play extends React.Component {

    render() {

        const containerStyle = {
            flex: 1,
            backgroundColor: 'white'
        };

        const listStyle = {
            marginBottom: 20
        }

        const titleStyle = {
            fontSize: 13,
            fontFamily: 'Luna',
            color: '#7F5F42',
            textAlign: 'center'
        }
        return (
            <View style={containerStyle}>
                <ScrollView style={{ paddingTop: 10 }}>
                    <Text style={titleStyle}>Achievements</Text>
                    <List style={listStyle}>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../../assets/icons/3_days_row.png')} />
                            </Left>
                            <Body>
                                <Text>A good start</Text>
                                <Text note numberOfLines={2}>Measure your blood sugar 3 days in a row</Text>
                            </Body>
                            <Right>
                                <Text>+ 3 points</Text>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../../assets/icons/5_days_row.png')} />
                            </Left>
                            <Body>
                                <Text>Keep going...</Text>
                                <Text note numberOfLines={2}>Measure your blood sugar 5 days in a row</Text>
                            </Body>
                            <Right>
                                <Text>+ 5 points</Text>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../../assets/icons/7_days_row.png')} />
                            </Left>
                            <Body>
                                <Text>What a champ !</Text>
                                <Text note numberOfLines={2}>Measure your blood sugar 7 days in a row</Text>
                            </Body>
                            <Right>
                                <Text>+ 7 points</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <Text style={titleStyle}>Games</Text>
                </ScrollView>
            </View >
        );
    }
}

export default Play;