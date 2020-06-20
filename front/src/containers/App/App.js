import { connect } from 'react-redux';

import App from '../../App/App';
import { isLoggedIn, fetchPosts } from '../../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  isInitialLoading: state.global.isInitialLoading,
  hasTriedToAuthenticate: state.user.hasTriedToAuthenticate,
});

const mapDispatchToProps = (dispatch) => ({
  isUserLogged: () => dispatch(isLoggedIn()),
  fetchPosts: () => dispatch(fetchPosts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
