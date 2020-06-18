import { connect } from 'react-redux';

import TheTavern from '../../sections/TheTavern/TheTavern';
import { logout } from '../../actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TheTavern);
