import { connect } from 'react-redux';

import Chat from '../../../sections/TheTavern/Tavern/Chat/Chat';
import { addChatMessage, resetFields } from '../../../actions';

const mapStateToProps = (state) => ({
  message: state.chat.message,
  messages: state.chat.messages,
});

const mapDispatchToProps = (dispatch) => ({
  addChatMessage: (message) => dispatch(addChatMessage(message)),
  resetFields: (reducer) => dispatch(resetFields(reducer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
