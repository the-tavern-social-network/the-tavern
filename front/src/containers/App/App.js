import { connect } from 'react-redux';

import App from '../../App/App';
import { isLoggedIn } from '../../actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  isUserLogged: () => dispatch(isLoggedIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
