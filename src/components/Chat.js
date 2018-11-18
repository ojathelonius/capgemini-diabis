import React from 'react';
import { View, Text } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import messages from '../../data/messages';

class Chat extends React.Component {

    render() {

        const containerStyle = {
            flex: 1
        };
        return (
            <View style={containerStyle}>
                <GiftedChat
                    messages={messages.sort((a, b) => b._id - a._id)}
                    user={{
                        _id: 1,
                    }}
                    renderBubble={this.renderBubble}
                />
            </View >
        );
    }

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#E3CEAE'
                    }
                }}
            />
        )
    }
}

export default Chat;