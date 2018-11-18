import React from 'react';
import { View, Text, Image } from 'react-native';

class Home extends React.Component {

    render() {

        const containerStyle = {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center'
        };

        const imgStyle = {
            height: 100,
            width: 70,
            marginTop: 20
        }

        const titleStyle = {
            fontFamily: 'Luna',
            fontSize: 18,
            color: '#7F5F42'
        }
        return (
            <View style={containerStyle}>
                <Image
                    style={imgStyle}
                    resizeMode={'contain'}
                    source={require('../../assets/logo.png')} />
                <Text style={titleStyle}>Hello, Jonathan !</Text>
            </View >
        );
    }
}

export default Home;