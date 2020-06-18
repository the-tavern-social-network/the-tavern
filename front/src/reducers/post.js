import { INPUT_CHANGE, RESET_FIELDS, SAVE_POSTS, ADD_POST, REMOVE_POST} from '../actions';

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
    case REMOVE_POST:
      return {
        ...state,
        list: state.list.filter(post=> post.id !== action.id),
    };
      break;
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
    case ADD_POST:
      console.log({action})
      return {
        ...state,
        list: [...state.list, action.post],
      };
    default:
      return state;
  }
};
