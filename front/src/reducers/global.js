import { v4 as uuidv4 } from 'uuid';
import { SET_LOADING, SET_ERROR, SET_INITIAL_LOADING, SET_TAVERN_ID } from '../actions';

const INITIAL_STATE = {
  isInitialLoading: false,
  isLoading: false,
  hasError: false,
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
        hasError: true,
        isLoading: false,
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
