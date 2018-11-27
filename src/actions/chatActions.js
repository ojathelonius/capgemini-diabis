import config from '../config';
import axios from 'axios';

export const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    payload: message
})

export const sendMessage = (message) => (async (dispatch) => {
    dispatch(addMessage(message));

    try {
        const response = await axios({
            method: 'post',
            url: config.chatbotUrl
        });
        dispatch(receiveMessage(response.data));
    } catch (e) {
        console.log(e)
    }

})

export const receiveMessage = (message) => {
    const chatMessage = {
        text: message.output.text,
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Woopy'
        }
    }
}