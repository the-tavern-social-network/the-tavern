import { connect } from 'react-redux';

import { login, resetFields } from '../../actions';

import Signin from '../../sections/Auth/Signin/Signin';

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  hasError: state.global.hasError,
  errorMessage: state.global.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
  resetFields: () => dispatch(resetFields('auth')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
