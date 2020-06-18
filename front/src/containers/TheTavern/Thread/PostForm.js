import { connect } from 'react-redux';

import { post } from '../../../actions';
import PostForm from '../../../sections/TheTavern/Thread/PostForm/PostForm';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  post: () => dispatch(post()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
