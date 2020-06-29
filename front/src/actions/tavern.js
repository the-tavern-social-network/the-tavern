export const TAVERN_CONTACT_CONNECT = 'TAVERN_CONTACT_CONNECT';
export const TAVERN_CONTACT_DISCONNECT = 'TAVERN_CONTACT_DISCONNECT';
export const ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE';
export const RESET_CHAT = 'RESET_CHAT';
export const INVITE_CONTACT = 'INVITE_CONTACT';
export const TAVERN_INVITE = 'TAVERN_INVITE';
export const DELETE_TAVERN = 'DELETE_TAVERN';
export const DELETE_TAVERN_INVITE = 'DELETE_TAVERN_INVITE';

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
  date
});
export const deleteTavern = (tavernId) => ({ type: DELETE_TAVERN, tavernId });
export const deleteTavernInvite = (participantId, tavernId) => ({
  type: DELETE_TAVERN_INVITE,
  participantId,
  tavernId,
});