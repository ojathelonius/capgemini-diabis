import React from 'react';
import { View, Text } from 'react-native';

class Chat extends React.Component {

    render() {

        const containerStyle = {
            flex: 1
        };
        return (
            <View style={containerStyle}>
                <Text>Chat</Text>
            </View >
        );
    }
}

export default Chat;