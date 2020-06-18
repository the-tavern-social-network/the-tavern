import { connect } from 'react-redux';

import Posts from '../../../sections/TheTavern/Thread/Posts/Posts';

const mapStateToProps = (state) => ({
  posts: state.post.list,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
