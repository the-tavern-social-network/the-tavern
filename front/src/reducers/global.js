import { v4 as uuidv4 } from 'uuid';
import {
  SET_LOADING,
  SET_ERROR,
  UNSET_ERROR,
  SET_INITIAL_LOADING,
  SET_TAVERN_ID,
  ISRESOLVE,
} from '../actions';

const INITIAL_STATE = {
  isResolve: false,
  isInitialLoading: false,
  isLoading: false,
  hasError: {},
  errorMessage: '',
  tavernId: uuidv4(),
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_INITIAL_LOADING:
      return {
        ...state,
        isInitialLoading: !state.isInitialLoading,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case SET_ERROR:
      switch (action.errorType) {
        case 'all fields':
          return {
            ...state,
            errorMessage: action.errorMessage,
            hasError: { ...state.hasError, ...action.data },
            isLoading: false,
          };
        case 'email':
          return {
            ...state,
            errorMessage: action.errorMessage,
            hasError: { ...state.hasError, email: true },
            isLoading: false,
          };
        case 'username too long':
          return {
            ...state,
            errorMessage: action.errorMessage,
            hasError: { ...state.hasError, username: true },
            isLoading: false,
          };
        case 'password not matching':
          return {
            ...state,
            errorMessage: action.errorMessage,
            hasError: { ...state.hasError, password: true, confirmPassword: true },
            isLoading: false,
          };
        case 'invalid password':
          return {
            ...state,
            errorMessage: action.errorMessage,
            hasError: { ...state.hasError, password: true, confirmPassword: true },
            isLoading: false,
          };
      }
      return {
        ...state,
        errorMessage: action.errorMessage,
        hasError: true,
        isLoading: false,
      };
    case UNSET_ERROR:
      return {
        ...state,
        hasError: false,
        errorMessage: '',
      };
    case ISRESOLVE:
      return {
        ...state,
        isResolve: !state.isResolve,
      };
    case SET_TAVERN_ID:
      return {
        ...state,
        tavernId: uuidv4(),
      };
    default:
      return state;
  }
};
