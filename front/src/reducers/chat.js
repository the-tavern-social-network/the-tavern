import { INPUT_CHANGE, ADD_CHAT_MESSAGE, RESET_FIELDS, RESET_CHAT } from '../actions';

const INITIAL_STATE = {
  messages: [],
  message: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case INPUT_CHANGE:
      if (action.reducerName === 'chat') {
        return {
          ...state,
          [action.name]: action.value,
        };
      }
      return state;
    case ADD_CHAT_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.message),
      };
    case RESET_FIELDS:
      if (action.reducer === 'chat') {
        return {
          ...state,
          message: '',
        };
      }
      return state;
    case RESET_CHAT:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};
