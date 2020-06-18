import { connect } from 'react-redux';
import { wsConnect } from '../../actions'

import TheTavern from '../../sections/TheTavern/TheTavern'

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  wsConnect: () => dispatch(wsConnect())
});

export default connect(mapStateToProps, mapDispatchToProps)(TheTavern);
