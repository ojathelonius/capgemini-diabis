import React from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';
import { Image, View, Container } from 'react-native';

class MainHeader extends React.Component {

    render() {
        const headerStyle = {
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#7E5E41',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FFF9F2',
            flexDirection: 'row'
        }

        const titleStyle = {
            fontFamily: 'Roboto',
            color: '#7E5E41',
            fontSize: 18
        }

        const imgStyle = {
            height: 30,
            width: 40,
            margin: 0
        }

        const flexStyle = {
            flex: 1
        }

        return (

            <Header style={headerStyle}>
                <View style={flexStyle}><Image
                    style={imgStyle}
                    resizeMode={'contain'}
                    source={require('../../assets/logo.png')} /></View>
                <View style={flexStyle}><Title style={titleStyle}>{this.props.title ? this.props.title : ''}</Title></View>
                <View style={flexStyle}></View>
            </Header>
        );
    }
}

export default MainHeader;