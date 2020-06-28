import { connect } from 'react-redux';

import { signup, resetFields, unsetError, isResolve } from '../../actions';

import Signup from '../../sections/Auth/Signup/Signup';

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  hasError: state.global.hasError,
  errorMessage: state.global.errorMessage,
  resolve: state.global.isResolve,
});

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch(signup()),
  resetFields: () => dispatch(resetFields('auth')),
  unsetError: () => dispatch(unsetError()),
  isResolve:() => dispatch(isResolve()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
