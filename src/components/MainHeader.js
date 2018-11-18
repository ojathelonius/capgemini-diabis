import React from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';
import { Image, View, Container } from 'react-native';

class MainHeader extends React.Component {

    render() {
        const headerStyle = {
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }

        const titleStyle = {
            fontFamily: 'Roboto',
            color: '#878787',
            fontSize: 18
        }

        return (

            <Header style={headerStyle}>
                <View><Title style={titleStyle}>{this.props.title ? this.props.title : ''}</Title></View>
            </Header>
        );
    }
}

export default MainHeader;