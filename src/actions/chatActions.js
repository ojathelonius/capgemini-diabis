import config from '../../config';
import axios from 'axios';

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

    const chatMessage = {
        text: message.output.text,
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Woopy'
        }
    }

    dispatch(addMessage(chatMessage));
});

export const updateContext = (context) => ({
    type: 'UPDATE_CONTEXT',
    payload: context
});