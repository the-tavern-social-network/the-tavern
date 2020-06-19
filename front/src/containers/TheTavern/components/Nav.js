import { connect } from 'react-redux';

import Nav from '../../../sections/TheTavern/components/Nav/Nav'

import { logout } from '../../../actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
