import { connect } from 'react-redux';
import { deletePost, sendContactRequest } from '../../../actions';

import Posts from '../../../sections/TheTavern/Thread/Posts/Posts';

const mapStateToProps = (state) => ({
  posts: state.post.list,
  loggedUser: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePost(id)),
  sendContactRequest: (id) => dispatch(sendContactRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
