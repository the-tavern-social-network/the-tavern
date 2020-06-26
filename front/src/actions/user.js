export const SEND_CONTACT_REQUEST = 'SEND_CONTACT_REQUEST';
export const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST';
export const ACCEPT_CONTACT = 'ACCEPT_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const SET_IS_EDITING = 'SET_IS_EDITING';
export const EDIT_USER_ACCOUNT = 'EDIT_USER_ACCOUNT';
export const DELETE_ACOUNT = 'DELETE_ACOUNT';
export const UPDATE_AVATAR = 'UPDATE_AVATAR';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';

export const sendContactRequest = (contactId) => ({ type: SEND_CONTACT_REQUEST, contactId });
export const addContactRequest = (contact) => ({ type: ADD_CONTACT_REQUEST, contact });
export const acceptContact = (contactId) => ({ type: ACCEPT_CONTACT, contactId });
export const addContact = (contact) => ({ type: ADD_CONTACT_REQUEST, contact });
export const deleteContact = (contactId) => ({ type: DELETE_CONTACT, contactId });
export const removeContact = (contact) => ({ type: REMOVE_CONTACT, contact });
export const setIsEditing = () => ({ type: SET_IS_EDITING });
export const editUserAccount = () => ({ type: EDIT_USER_ACCOUNT });
export const deleteAcount = (userId) => ({ type: DELETE_ACOUNT, userId });
export const updateAvatar = (avatar) => ({
  type: UPDATE_AVATAR,
  avatar,
});
export const updateImage = (avatar) => ({
  type: UPDATE_IMAGE,
  avatar,
});
