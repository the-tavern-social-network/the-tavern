import {
  TAVERN_CONTACT_CONNECT,
  TAVERN_CONTACT_DISCONNECT,
  INPUT_CHANGE,
  ADD_CHAT_MESSAGE,
  RESET_FIELDS,
  RESET_CHAT,
  SET_TAVERN_ID,
  DELETE_TAVERN,
} from '../actions';

const INITIAL_STATE = {
  list: [],
  connectedContacts: [],
  messages: [],
  message: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    // case SET_TAVERN_ID:
    //   return {
    //     ...state,
    //     list: [
    //       ...state.list, {
    //       connectedContacts: [],
    //       messages: [],
    //       tavernId: action.tavernId,
    //     }]
    //   }
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
    case DELETE_TAVERN:
      return {
        ...state,
        list: state.list.filter(tavern=> tavern.tavernId !== action.tavernId)
      }
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
