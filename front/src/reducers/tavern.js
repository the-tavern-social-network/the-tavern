import {
  INVITE_CONTACT,
  TAVERN_CONTACT_CONNECT,
  TAVERN_CONTACT_DISCONNECT,
  INPUT_CHANGE,
  ADD_CHAT_MESSAGE,
  RESET_FIELDS,
  RESET_CHAT,
  OPEN_TAVERN,
  DELETE_TAVERN,
  // SET_TAVERN_ID,
} from '../actions';

// import RTCMultiConnection from 'rtcmulticonnection';

const INITIAL_STATE = {
  // connection: new RTCMultiConnection(),
  connectedContacts: [],
  messages: [],
  message: '',
  isInitiator: false,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    // case SET_TAVERN_ID:
    //   return {
    //     ...state,
    //     connection: new RTCMultiConnection(),
    //   };
    case OPEN_TAVERN:
      return { ...state, isInitiator: action.isInitiator || false };
    case INVITE_CONTACT:
      const requester = state.connectedContacts.find(
        (connectedContact) => +connectedContact.id === +action.gamemaster.id,
      );

      const contactIndex = requester.contacts.findIndex(
        (contact) => +contact.id === action.participant.id,
      );

      requester.contacts.splice(contactIndex, 1, action.participant);

      return {
        ...state,
        connectedContacts: state.connectedContacts
          .filter((connectedContact) => +connectedContact.id !== +action.gamemaster.id)
          .concat(requester),
      };
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
        connectedContacts: [],
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
