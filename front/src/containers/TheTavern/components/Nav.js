import { connect } from 'react-redux';

import Nav from '../../../sections/TheTavern/components/Nav/Nav';

import { logout } from '../../../actions';

const mapStateToProps = (state) => ({
  user: state.user.loggedUser,
  tavernId: state.global.tavernId,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
