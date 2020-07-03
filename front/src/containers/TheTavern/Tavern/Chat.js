import { connect } from 'react-redux';

import Chat from '../../../sections/TheTavern/Tavern/Chat/Chat';
import { addChatMessage, resetFields } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
  message: state.tavern.message,
  messages: state.tavern.messages,
});

const mapDispatchToProps = (dispatch) => ({
  addChatMessage: (message) => dispatch(addChatMessage(message)),
  resetFields: (reducer) => dispatch(resetFields(reducer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
