import { connect } from 'react-redux';

import { signup, resetFields } from '../../actions';

import Signup from '../../sections/Auth/Signup/Signup';

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch(signup()),
  resetFields: () => dispatch(resetFields('auth')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
