import { CONNECT, DISCONNECT } from '../actions';

const INITIAL_STATE = {
  loggedUser: {},
  isLoggedIn: false,
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
    default:
      return state;
  }
};
