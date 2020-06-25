import {
  CONNECT,
  DISCONNECT,
  SET_IS_EDITING,
  INPUT_CHANGE,
  EDIT_USER_ACCOUNT,
  DELETE_ACOUNT,
  ADD_CONTACT_REQUEST,
  DELETE_CONTACT,
  REMOVE_CONTACT,
  SEND_CONTACT_REQUEST,
  ACCEPT_CONTACT,
  ADD_CONTACT,
} from '../actions';

const INITIAL_STATE = {
  loggedUser: {},
  isLoggedIn: false,

  hasTriedToAuthenticate: false,

  isEditing: false,
  description: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CONNECT:
      return {
        ...state,
        loggedUser: action.response.user,
        isLoggedIn: action.response.isLoggedIn,
        hasTriedToAuthenticate: true,
      };
    case DISCONNECT:
      return {
        ...state,
        loggedUser: action.response.user,
        isLoggedIn: action.response.isLoggedIn,
      };
    case SET_IS_EDITING:
      return {
        ...state,
        isEditing: !state.isEditing,
      };
    case INPUT_CHANGE:
      if (action.reducerName === 'user') {
        return {
          ...state,
          [action.name]: action.value,
        };
      }
      return state;
    case EDIT_USER_ACCOUNT:
      return {
        ...state,
        loggedUser: action.user,
      };
    case SEND_CONTACT_REQUEST:
      return {
        ...state,
        loggedUser: action.user,
      };
    case ADD_CONTACT_REQUEST:
      if (+action.contact.id === state.loggedUser.id) {
        return {
          ...state,
          loggedUser: action.contact,
        };
      }
      return state;
    case ACCEPT_CONTACT:
      return {
        ...state,
        loggedUser: action.user,
      };
    case ADD_CONTACT:
      return {
        ...state,
        loggedUser: action.contact,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        loggedUser: action.user,
      }
    case REMOVE_CONTACT:
      if (+action.contact.id === state.loggedUser.id) {
        return {
          ...state,
          loggedUser: action.contact
        }
      }
      return state;
    case DELETE_ACOUNT:
      return {
        ...state,
        loggedUser: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
