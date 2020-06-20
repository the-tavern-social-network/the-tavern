import { CONNECT, DISCONNECT } from '../actions';

const INITIAL_STATE = {
  loggedUser: {},
  isLoggedIn: false,
  hasTriedToAuthenticate: false,
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
    default:
      return state;
  }
};
