import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import WoopySwiper from './WoopySwiper';
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

        const weatherStyle = {
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }

        const sunStyle = {
            height: 60,
            width: 40,
            marginLeft: 10
        }

        const flexText = {
            flex: 1,
            marginLeft: 10,
            padding: 5
        }

        const sectionStyle = {
            marginTop: 20,
            width: '100%'
        }

        const sectionTitle = {
            fontSize: 20,
            color: "#7F5F42",
            marginBottom: 10,
            marginLeft: 10
        }

        return (
            <View style={containerStyle}>

                <Image
                    style={imgStyle}
                    resizeMode={'contain'}
                    source={require('../../assets/logo.png')} />
                <Text style={titleStyle}>Hello, Jonathan !</Text>

                <View style={weatherStyle}><Image
                    style={sunStyle}
                    resizeMode={'contain'}
                    source={require('../../assets/images/sun.png')} />
                    <View style={flexText}>
                        <Text>
                            You're in luck, the weather is going to be awesome today with around 23°C !</Text>
                    </View>
                </View>
                <ScrollView style={{width: '100%'}}>
                    <View style={sectionStyle}>
                        <Text style={sectionTitle}>Discover what Woopy can do</Text>
                        <WoopySwiper />
                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default Home;