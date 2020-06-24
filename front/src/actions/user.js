export const SEND_CONTACT_REQUEST = 'SEND_CONTACT_REQUEST';
export const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST';
export const ACCEPT_CONTACT = 'ACCEPT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const SET_IS_EDITING = 'SET_IS_EDITING';
export const EDIT_USER_ACCOUNT = 'EDIT_USER_ACCOUNT';

export const sendContactRequest = (contactId) => ({ type: SEND_CONTACT_REQUEST, contactId });
export const addContactRequest = (user, contact) => ({
  type: ADD_CONTACT_REQUEST,
  user,
  contact,
});
export const acceptContact = (contactId) => ({ type: ACCEPT_CONTACT, contactId });
export const deleteContact = (isContact, contactId) => ({
  type: DELETE_CONTACT,
  isContact,
  contactId,
});

export const removeContact = (userId, contactId) => ({
  type: REMOVE_CONTACT,
  userId,
  contactId,
});

export const setIsEditing = () => ({ type: SET_IS_EDITING });
export const editUserAccount = () => ({ type: EDIT_USER_ACCOUNT });
