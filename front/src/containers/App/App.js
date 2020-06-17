import { connect } from 'react-redux';

import App from '../../App/App';
import { isLoggedIn, fetchPosts } from '../../actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  isUserLogged: () => dispatch(isLoggedIn()),
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
