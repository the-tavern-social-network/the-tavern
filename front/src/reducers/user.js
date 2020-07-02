import avatardefault from '../assets/images/avatar/Avatardefault.png';
import { defaultTitles } from '../util';

import {
  CONNECT,
  DISCONNECT,
  SET_IS_EDITING,
  INPUT_CHANGE,
  EDIT_USER_ACCOUNT,
  DELETE_ACOUNT,
  ADD_CONTACT_REQUEST,
  DELETE_CONTACT,
  REMOVE_CONTACT,
  SEND_CONTACT_REQUEST,
  ACCEPT_CONTACT,
  ADD_CONTACT,
  UPDATE_AVATAR,
  UPDATE_IMAGE,
  UPDATE_TITLE,
  CONTACT_UPDATE,
  TAVERN_INVITE,
  DELETE_TAVERN,
  DELETE_TAVERN_INVITE,
  OPEN_TAVERN,
  INVITE_CONTACT,
} from '../actions';

const INITIAL_STATE = {
  loggedUser: {},
  defaultTitles,
  hasTriedToAuthenticate: false,
  avatar: avatardefault,
  isEditing: false,
  description: '',
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
    case SET_IS_EDITING:
      return {
        ...state,
        isEditing: !state.isEditing,
        description: state.isEditing ? state.description : state.loggedUser.description,
      };
    case INPUT_CHANGE:
      if (action.reducerName === 'user') {
        return {
          ...state,
          [action.name]: action.value,
        };
      }
      return state;
    case EDIT_USER_ACCOUNT:
      return {
        ...state,
        loggedUser: action.user,
      };
    case SEND_CONTACT_REQUEST:
      return {
        ...state,
        loggedUser: action.user,
      };
    case ADD_CONTACT_REQUEST:
      if (+action.contact.id === state.loggedUser.id) {
        return {
          ...state,
          loggedUser: action.contact,
        };
      }
      return state;
    case ACCEPT_CONTACT:
      return {
        ...state,
        loggedUser: action.user,
      };
    case ADD_CONTACT:
      return {
        ...state,
        loggedUser: action.contact,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        loggedUser: action.user,
      };
    case REMOVE_CONTACT:
      if (+action.contact.id === state.loggedUser.id) {
        return {
          ...state,
          loggedUser: action.contact,
        };
      }
      return state;
    case DELETE_ACOUNT:
      return {
        ...state,
        loggedUser: {},
        isLoggedIn: false,
      };
    case UPDATE_AVATAR:
      return {
        ...state,
        avatar: action.avatar,
      };
    case UPDATE_IMAGE:
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          avatar: action.avatar,
        },
      };
    case UPDATE_TITLE:
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          title: action.title,
        },
      };
    case CONTACT_UPDATE:
      const sent = state.loggedUser.pendingRequests.sent.map((contact) => {
        let updatedContact = contact;
        if (contact.id === action.contact.id) updatedContact = action.contact;
        return updatedContact;
      });

      const received = state.loggedUser.pendingRequests.received.map((contact) => {
        let updatedContact = contact;
        if (contact.id === action.contact.id) updatedContact = action.contact;
        return updatedContact;
      });
      const contacts = state.loggedUser.contacts.map((contact) => {
        let updatedContact = contact;
        if (contact.id === action.contact.id) updatedContact = action.contact;
        return updatedContact;
      });

      const tavernRequests = state.loggedUser.tavernRequests.map((contact) => {
        let updatedContact = contact;
        if (contact.id === action.contact.id) updatedContact = action.contact;
        return updatedContact;
      });

      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          pendingRequests: { ...state.loggedUser.pendingRequests, sent, received },
          contacts,
          tavernRequests,
        },
      };
    case INVITE_CONTACT:
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          contacts: state.loggedUser.contacts
            .filter((contact) => +contact.id !== +action.participant.id)
            .concat(action.participant),
        },
      };
    case TAVERN_INVITE:
      if (action.participantId === state.loggedUser.id) {
        return {
          ...state,
          loggedUser: {
            ...state.loggedUser,
            tavernRequests: [
              ...state.loggedUser.tavernRequests,
              {
                gamemaster: action.gamemaster,
                tavernId: action.tavernId,
                date: action.date,
              },
            ],
          },
        };
      }
      return state;
    case DELETE_TAVERN_INVITE:
      if (state.loggedUser.id === action.participantId) {
        return {
          ...state,
          loggedUser: {
            ...state.loggedUser,
            tavernRequests: state.loggedUser.tavernRequests.filter(
              (tavernRequest) => tavernRequest.tavernId !== action.tavernId,
            ),
          },
        };
      }
      return state;
    case OPEN_TAVERN:
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          isGamemaster: true,
        },
      };
    case DELETE_TAVERN:
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          isGamemaster: false,
        },
      };
    default:
      return state;
  }
};
