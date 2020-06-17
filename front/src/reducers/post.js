import { INPUT_CHANGE, RESET_FIELDS, SAVE_POSTS } from '../actions';

const INITIAL_STATE = {
  list: [],
  post: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case INPUT_CHANGE:
      if (action.reducerName === 'post') {
        return {
          ...state,
          [action.name]: action.value,
        };
      }
      return state;
    case RESET_FIELDS:
      if (action.reducer === 'post') {
        return {
          ...state,
          post: '',
        };
      }
      return state;
    case SAVE_POSTS:
      return {
        ...state,
        list: action.posts,
      };
    default:
      return state;
  }
};
