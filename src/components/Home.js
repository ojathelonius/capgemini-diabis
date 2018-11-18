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

        const rowStyle = {
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

        const bloodSugarStyle = {
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
            fontSize: 13,
            color: "#7F5F42",
            marginBottom: 10,
            textAlign: 'center',
            fontFamily: 'Luna'
        }

        return (
            <View style={containerStyle}>

                <Image
                    style={imgStyle}
                    resizeMode={'contain'}
                    source={require('../../assets/logo.png')} />
                <Text style={titleStyle}>Hello, Jonathan !</Text>
                <ScrollView style={{ width: '100%' }}>
                    <View style={rowStyle}><Image
                        style={sunStyle}
                        resizeMode={'contain'}
                        source={require('../../assets/images/sun.png')} />
                        <View style={flexText}>
                            <Text>
                                You're in luck, the weather is going to be awesome today with around 23°C !</Text>
                        </View>
                    </View>

                    <View style={rowStyle}><Image
                        style={bloodSugarStyle}
                        resizeMode={'contain'}
                        source={require('../../assets/images/blood-sugar.png')} />
                        <View style={flexText}>
                            <Text>
                                You checked your blood sugar last time at 11:42am today.</Text>
                        </View>
                    </View>
                    <View style={rowStyle}><Image
                        style={bloodSugarStyle}
                        resizeMode={'contain'}
                        source={require('../../assets/images/average.png')} />
                        <View style={flexText}>
                            <Text>
                                Your average blood sugar for the past week is 5.5mmol/L. Way to go !</Text>
                        </View>
                    </View>
                    <View style={sectionStyle}>
                        <Text style={sectionTitle}>Discover what else Woopy can do</Text>
                        <WoopySwiper />
                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default Home;