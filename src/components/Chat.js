import React from 'react';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'

class Chat extends React.Component {

    render() {

        const containerStyle = {
            flex: 1
        };

        console.log(this.props.messages);

        /* Messages appear to be displayed in reverse on Android, but not on iOS */
        return (
            <View style={containerStyle}>
                <GiftedChat
                    messages={this.props.messages.reverse()}
                    user={{
                        _id: 1,
                    }}
                    renderBubble={this.renderBubble}
                    renderSend={this.renderSend}
                    isAnimated={true}
                    onSend={messages => this.props.addMessage(messages[0])}
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