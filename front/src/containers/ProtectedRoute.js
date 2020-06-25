import { connect } from 'react-redux';

import ProtectedRoute from '../hoc/ProtectedRoute';

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  hasTriedToAuthenticate: state.user.hasTriedToAuthenticate,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
