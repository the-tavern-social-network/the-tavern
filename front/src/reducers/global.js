import { v4 as uuidv4 } from 'uuid';
import { SET_LOADING, SET_ERROR, UNSET_ERROR, SET_INITIAL_LOADING, SET_TAVERN_ID, ISRESOLVE } from '../actions';

const INITIAL_STATE = {
  isResolve: false,
  isInitialLoading: false,
  isLoading: false,
  hasError: false,
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
      }
    case ISRESOLVE:
      return {
        ...state,
        isResolve: !state.isResolve,
      }
    case SET_TAVERN_ID:
      return {
        ...state,
        tavernId: uuidv4(),
      };
    default:
      return state;
  }
};
