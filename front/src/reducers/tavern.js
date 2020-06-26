import {
  TAVERN_CONTACT_CONNECT,
  TAVERN_CONTACT_DISCONNECT,
  INPUT_CHANGE,
  ADD_CHAT_MESSAGE,
  RESET_FIELDS,
  RESET_CHAT,
} from '../actions';
import {} from '../actions/tavern';

const INITIAL_STATE = {
  connectedContacts: [],
  messages: [],
  message: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case TAVERN_CONTACT_CONNECT:
      return {
        ...state,
        connectedContacts: [...state.connectedContacts, action.user],
      };
    case TAVERN_CONTACT_DISCONNECT:
      return {
        ...state,
        connectedContacts: state.connectedContacts.filter(
          (contact) => contact.connectionUserId !== action.userId,
        ),
      };
    case INPUT_CHANGE:
      if (action.reducerName === 'tavern') {
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
      if (action.reducer === 'tavern') {
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
