import { connect } from 'react-redux';
import { deletePost } from '../../../actions'

import Posts from '../../../sections/TheTavern/Thread/Posts/Posts';

const mapStateToProps = (state) => ({
  posts: state.post.list,
  loggedUser: state.user.loggedUser.username,
});

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
