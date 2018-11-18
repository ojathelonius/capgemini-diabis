import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { List, ListItem, Form, Item, Picker, Card, CardItem, Left, Thumbnail, Body, Right, Button, Icon } from 'native-base';

class Board extends React.Component {

    render() {

        const containerStyle = {
            flex: 1,
            backgroundColor: 'white'
        };

        const sectionStyle = {
            marginBottom: 20
        }

        const titleStyle = {
            fontSize: 13,
            fontFamily: 'Luna',
            color: '#7F5F42',
            textAlign: 'center'
        }

        const formStyle = {
            marginBottom: 20
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
        return (
            <View style={containerStyle}>
                <ScrollView style={{paddingTop: 10}}>
                    <Text style={titleStyle}>Pick a game</Text>
                    <Form style={formStyle}>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                style={{ width: undefined }}
                                placeholder="Select a game"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue="key0"
                            >
                                <Picker.Item label="Pirates of the Island" value="key0" />
                                <Picker.Item label="Chasing the spaceship" value="key1" />
                                <Picker.Item label="All aboard" value="key2" />
                                <Picker.Item label="Keep jumping" value="key3" />
                                <Picker.Item label="Blorg" value="key4" />
                            </Picker>
                        </Item>
                    </Form>
                    <View style={sectionStyle}>
                        <Text style={titleStyle}>Top players</Text>
                        <List>
                            <ListItem>
                                <Text>Patrick H. (849 points)</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Stephan T. (833 points)</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Dalila M. (799 points)</Text>
                            </ListItem>
                        </List>
                    </View>
                    <View style={sectionStyle}>
                        <Text style={titleStyle}>Your ranking</Text>
                        <Card style={cardStyle}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../assets/images/empty_profile.png')} />
                                    <Body>
                                        <Text>Ranked #140 on Pirates of the Island</Text>
                                        <Text note>Jonathan H. (376 points)</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../../assets/images/pirates-game.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent>
                                        <Icon style={iconStyle} type="FontAwesome" name="facebook-f" />
                                        <Text>Share on Facebook</Text>
                                    </Button>
                                </Left>
                                <Body>

                                </Body>
                                <Right>
                                    < Button transparent>
                                        <Icon style={iconStyle} type="FontAwesome" name="twitter" />
                                        <Text>Share on Twitter</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default Board;