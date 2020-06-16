import { INPUT_CHANGE } from '../actions';

const INITIAL_STATE = {
  // signin form
  signinEmail: '',
  signinPassword: '',
  //signup form
  signupEmail: '',
  signupUsername: '',
  signupPassword: '',
  signupConfirmPassword: '',
  signupBirthdate: '',
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
