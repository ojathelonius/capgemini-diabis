import React from 'react';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
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
                    renderSend={this.renderSend}
                    isAnimated={true}
                />
                <KeyboardAvoidingView  behavior={'padding'} keyboardVerticalOffset={80}/>
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

    renderSend(props) {

        const sendStyle = {
            color: '#7F5F42',
            fontSize: 16
        };

        const viewSendStyle = {
            marginRight: 10,
            marginBottom: 10
        };

        return (
            <Send
                {...props}
            >
                <View style={viewSendStyle}>
                    <Text style={sendStyle}>Send</Text>
                </View>
            </Send>
        );
    }
}

export default Chat;