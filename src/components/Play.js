import React from 'react';
import { View, Image, ScrollView } from 'react-native';
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

        const cardStyle = {
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10
        }

        const iconStyle = {
            color: '#7F5F42',
            marginRight: 8
        }

        const playStyle = {
            color: '#7F5F42'
        }
        return (
            <View style={containerStyle}>
                <ScrollView style={{ paddingTop: 10, marginBottom: 20 }}>
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
                    <Card style={cardStyle}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Chasing the spaceship</Text>
                                    <Text note>UNLOCKED</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../assets/images/spaceship-game.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon style={iconStyle} type="FontAwesome" name="check" />
                                    <Text style={playStyle}>Play</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card style={cardStyle}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Pirates of the Island</Text>
                                    <Text note>UNLOCKED</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../assets/images/pirates-game.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon style={iconStyle} type="FontAwesome" name="check" />
                                    <Text style={playStyle}>Play</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card style={cardStyle}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Keep jumping</Text>
                                    <Text note>LOCKED - 130 points required</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../assets/images/platform-game.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon style={iconStyle} type="FontAwesome" name="ban" />
                                    <Text style={playStyle}>Earn more points and come back !</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </ScrollView>
            </View >
        );
    }
}

export default Play;