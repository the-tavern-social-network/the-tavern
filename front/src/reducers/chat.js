import { CHANGE_VALUE, ADD_CHAT_MESSAGE, RESET_FIELD } from '../actions';

const INITIAL_STATE = {
  messages: [],
  message: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        message: action.value,
      };
    case ADD_CHAT_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.message),
      };
    case RESET_FIELD:
      if (action.reducer === 'chat') {
        return {
          ...state,
          message: '',
        };
      }
      return state;
    default:
      return state;
  }
};
