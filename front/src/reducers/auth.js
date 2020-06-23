import { INPUT_CHANGE, RESET_FIELDS } from '../actions';
import { getDate } from '../util';

const { year } = getDate();

const INITIAL_STATE = {
  //signup form
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  birthdate: `${year - 16}-01-01`,
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
    case RESET_FIELDS:
      if (action.reducer === 'auth') {
        return {
          ...state,

          email: '',
          username: '',
          password: '',
          confirmPassword: '',
          birthdate: '',
        };
      }
      return state;
    default:
      return state;
  }
};
