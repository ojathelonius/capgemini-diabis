import React from 'react';
import { View, Text } from 'react-native';

class Check extends React.Component {

    render() {

        const containerStyle = {
            flex: 1
        };
        return (
            <View style={containerStyle}>
                <Text>Check</Text>
            </View >
        );
    }
}

export default Check;