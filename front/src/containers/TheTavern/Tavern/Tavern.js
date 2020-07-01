import { connect } from 'react-redux';

import Tavern from '../../../sections/TheTavern/Tavern/Tavern';

import {
  resetChat,
  setTavernId,
  tavernContactConnect,
  tavernContactDisconnect,
  inviteContact,
  createTavern,
  deleteTavern,
} from '../../../actions';

const mapStateToProps = (state) => ({
  user: state.user.loggedUser,
  connectedContacts: state.tavern.connectedContacts,
});

const mapDispatchToProps = (dispatch) => ({
  resetChat: () => dispatch(resetChat()),
  setTavernId: (tavernId) => dispatch(setTavernId(tavernId)),
  tavernContactConnect: (user) => dispatch(tavernContactConnect(user)),
  tavernContactDisconnect: (userId) => dispatch(tavernContactDisconnect(userId)),
  inviteContact: (contactId, tavernId) => dispatch(inviteContact(contactId, tavernId)),
  createTavern: (tavernId) => dispatch(createTavern(tavernId)),
  deleteTavern: (tavernId) => dispatch(deleteTavern(tavernId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tavern);
