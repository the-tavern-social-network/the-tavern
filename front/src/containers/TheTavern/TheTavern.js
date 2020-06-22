import { connect } from 'react-redux';
import { wsConnect, logout } from '../../actions'

import TheTavern from '../../sections/TheTavern/TheTavern'

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  wsConnect: () => dispatch(wsConnect()),
  logout: () => dispatch(logout()),

});

export default connect(mapStateToProps, mapDispatchToProps)(TheTavern);
