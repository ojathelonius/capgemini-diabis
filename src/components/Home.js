import React from 'react';
import { View, Text } from 'react-native';

class Home extends React.Component {

    render() {

        const containerStyle = {
            flex: 1
        };
        return (
            <View style={containerStyle}>
                <Text>Home</Text>
            </View >
        );
    }
}

export default Home;