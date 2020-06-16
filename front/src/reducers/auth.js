import { INPUT_CHANGE } from '../actions';

const INITIAL_STATE = {
  loggedUser: {},
  isLoggedIn: false,
  // connection form
  connectionEmail: '',
  connectionPassword: '',
  //signin form
  signinEmail: '',
  signinUsername: '',
  signinPassword: '',
  signinConfirmPassword: '',
  signinBirthdate: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case INPUT_CHANGE:
      if (action.reducerName === 'auth') {
        return {
          ...state,
          [action.name]: action.value,
        };
      }
      return state;
    default:
      return state;
  }
};
