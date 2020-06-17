import { connect } from 'react-redux';

import Tavern from '../../../sections/TheTavern/Tavern/Tavern';

const mapStateToProps = (state) => ({
  user: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Tavern);
