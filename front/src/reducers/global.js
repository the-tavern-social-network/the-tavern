import { SET_LOADING, SET_ERROR, SET_INITIAL_LOADING } from '../actions';

const INITIAL_STATE = {
  isInitialLoading: false,
  isLoading: false,
  hasError: false,
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
    default:
      return state;
  }
};
