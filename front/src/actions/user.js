export const ADD_CONTACT = 'ADD_CONTACT';
export const SET_IS_EDITING = 'SET_IS_EDITING';
export const EDIT_USER_ACCOUNT = 'EDIT_USER_ACCOUNT';

export const addContact = (contactId) => ({ type: ADD_CONTACT, contactId });
export const setIsEditing = () => ({ type: SET_IS_EDITING });
export const editUserAccount = () => ({ type: EDIT_USER_ACCOUNT });
