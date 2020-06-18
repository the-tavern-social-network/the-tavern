import { connect } from 'react-redux';

import { post, resetFields } from '../../../actions';
import PostForm from '../../../sections/TheTavern/Thread/PostForm/PostForm';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  post: () => dispatch(post()),
  resetFields: (reducer)=> dispatch(resetFields(reducer))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
