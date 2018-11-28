import { connect } from 'react-redux';
import Chat from '../components/Chat';
import { sendMessage } from '../actions/chatActions';

const mapStateToProps = (state, ownProps) => ({
    messages: state.chatReducer.messages,
    context: state.chatReducer.context
    
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (message, context) => dispatch(sendMessage(message, context)),
});

const ChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);

export default ChatContainer;