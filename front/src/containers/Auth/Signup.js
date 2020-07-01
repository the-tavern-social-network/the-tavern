import { connect } from 'react-redux';

import { signup, resetFields, unsetError, isResolve, setError } from '../../actions';

import Signup from '../../sections/Auth/Signup/Signup';

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  hasError: state.global.hasError,
  errorMessage: state.global.errorMessage,
  resolve: state.global.isResolve,
  email: state.auth.email,
  username: state.auth.username,
  birthdate: state.auth.birthdate,
  password: state.auth.password,
  confirmPassword: state.auth.confirmPassword,
});

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch(signup()),
  resetFields: () => dispatch(resetFields('auth')),
  unsetError: () => dispatch(unsetError()),
  isResolve: () => dispatch(isResolve()),
  setError:(message, errorType, data) => dispatch(setError(message, errorType, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
