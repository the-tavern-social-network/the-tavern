import { connect } from 'react-redux';

import { login, resetFields, unsetError, setError } from '../../actions';

import Signin from '../../sections/Auth/Signin/Signin';

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  hasError: state.global.hasError,
  errorMessage: state.global.errorMessage,
  email: state.auth.email,
  password: state.auth.password,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
  resetFields: () => dispatch(resetFields('auth')),
  unsetError: () => dispatch(unsetError()),
  setError: (errorMessage, errorType, data) => dispatch(setError(errorMessage, errorType, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
