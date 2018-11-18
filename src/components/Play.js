import React from 'react';
import { View, Text } from 'react-native';

class Play extends React.Component {

    render() {

        const containerStyle = {
            flex: 1
        };
        return (
            <View style={containerStyle}>
                <Text>Play</Text>
            </View >
        );
    }
}

export default Play;