import { connect } from 'react-redux';
import Chat from '../components/Chat';
import { addMessage } from '../actions/chatActions';

const mapStateToProps = (state, ownProps) => ({
    messages: state.chatReducer.messages
});

const mapDispatchToProps = (dispatch) => ({
    addMessage: (message) => dispatch(addMessage(message)),
});

const ChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);

export default ChatContainer;