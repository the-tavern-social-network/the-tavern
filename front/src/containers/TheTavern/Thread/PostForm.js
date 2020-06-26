import { connect } from 'react-redux';

import {
  post,
  resetFields,
  acceptContact,
  deleteContact,
  deleteTavernRequest,
} from '../../../actions';
import PostForm from '../../../sections/TheTavern/Thread/PostForm/PostForm';

const mapStateToProps = (state) => ({
  user: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({
  post: () => dispatch(post()),
  resetFields: (reducer) => dispatch(resetFields(reducer)),
  acceptContact: (contactId) => dispatch(acceptContact(contactId)),
  deleteContact: (isContact, contactId) => dispatch(deleteContact(isContact, contactId)),
  deleteTavernRequest: (tavernId) => dispatch(deleteTavernRequest(tavernId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
