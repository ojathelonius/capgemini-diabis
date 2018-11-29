import config from '../../config';
import axios from 'axios';
import uuidv1 from 'uuid/v1';

export const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    payload: message
})

export const sendMessage = (message, context) => (async (dispatch) => {
    dispatch(addMessage(message));

    try {
        const response = await axios({
            method: 'post',
            url: config.chatbotUrl,
            data: {
                input: message.text,
                context: context
            }
        });
        dispatch(receiveMessage(response.data));
    } catch (e) {
        console.log(e)
    }

})

export const receiveMessage = (message) => ((dispatch) => {

    dispatch(updateContext(message.context));

    const content = message.output.text.constructor === Array ?
        message.output.text.map(sentence => sentence + '\n')
        : message.output.text;

    const chatMessage = {
        _id: uuidv1(),
        text: content,
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Woopy',
            avatar: require('../../assets/logo_chat.png')

        }
    }

    dispatch(addMessage(chatMessage));
});

export const updateContext = (context) => ({
    type: 'UPDATE_CONTEXT',
    payload: context
});