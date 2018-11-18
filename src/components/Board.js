import React from 'react';
import { View, Text } from 'react-native';

class Board extends React.Component {

    render() {

        const containerStyle = {
            flex: 1
        };
        return (
            <View style={containerStyle}>
                <Text>Board</Text>
            </View >
        );
    }
}

export default Board;