import { CONNECT, DISCONNECT, SET_IS_EDITING, INPUT_CHANGE, EDIT_USER_ACCOUNT } from '../actions';

const INITIAL_STATE = {
  loggedUser: {},
  isLoggedIn: false,
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
      }
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
      }
    default:
      return state;
  }
};
