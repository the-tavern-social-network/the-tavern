import { connect } from 'react-redux';

import Tavern from '../../../sections/TheTavern/Tavern/Tavern';

import { resetChat, setTavernId } from '../../../actions';

const mapStateToProps = (state) => ({
  user: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({
  resetChat: () => dispatch(resetChat()),
  setTavernId: () => dispatch(setTavernId()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tavern);
