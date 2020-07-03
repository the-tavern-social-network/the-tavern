export const TAVERN_CONTACT_CONNECT = 'TAVERN_CONTACT_CONNECT';
export const TAVERN_CONTACT_DISCONNECT = 'TAVERN_CONTACT_DISCONNECT';
export const ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE';
export const RESET_CHAT = 'RESET_CHAT';
export const INVITE_CONTACT = 'INVITE_CONTACT';
export const TAVERN_INVITE = 'TAVERN_INVITE';
export const OPEN_TAVERN = 'OPEN_TAVERN';
export const DELETE_TAVERN = 'DELETE_TAVERN';
export const DELETE_TAVERN_INVITE = 'DELETE_TAVERN_INVITE';
export const CLEAR_CONNECTED_CONTACTS_LIST = 'CLEAR_CONNECTED_CONTACTS_LIST';

export const tavernContactConnect = (user) => ({ type: TAVERN_CONTACT_CONNECT, user });
export const tavernContactDisconnect = (userId) => ({ type: TAVERN_CONTACT_DISCONNECT, userId });
export const addChatMessage = (message) => ({ type: ADD_CHAT_MESSAGE, message });
export const resetChat = () => ({ type: RESET_CHAT });
export const inviteContact = (contactId, tavernId) => ({
  type: INVITE_CONTACT,
  contactId,
  tavernId,
});
export const tavernInvite = (gamemaster, participantId, tavernId, date) => ({
  type: TAVERN_INVITE,
  gamemaster,
  participantId,
  tavernId,
  date,
});
export const openTavern = (isInitiator) => ({ type: OPEN_TAVERN, isInitiator });
export const deleteTavern = (tavernId, gamemaster, participant) => ({
  type: DELETE_TAVERN,
  tavernId,
  gamemaster,
  participant,
});
export const deleteTavernInvite = (gamemaster, participant, tavernId) => ({
  type: DELETE_TAVERN_INVITE,
  gamemaster,
  participant,
  tavernId,
});
export const clearConnectedContactsList = () => ({ type: CLEAR_CONNECTED_CONTACTS_LIST });
