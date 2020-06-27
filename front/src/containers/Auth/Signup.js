import { connect } from 'react-redux';

import { signup, resetFields, unsetError } from '../../actions';

import Signup from '../../sections/Auth/Signup/Signup';

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  hasError: state.global.hasError,
  errorMessage: state.global.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch(signup()),
  resetFields: () => dispatch(resetFields('auth')),
  unsetError: () => dispatch(unsetError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
