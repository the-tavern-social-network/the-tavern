import { INPUT_CHANGE, RESET_FIELDS, SAVE_POSTS, REMOVE_POST} from '../actions';

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
      const newArray = [
        ...state.list
      ];
      const indexToDelete = state.list.findIndex((post) => post.id === action.id)
      newArray.splice(indexToDelete, 1);
      return {
        ...state,
        list: newArray,
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
      const allPosts = [
          ...state.list
      ]

      allPosts.push(action.posts)
      return {
          ...state,
          list: allPosts,
      };

    default:
      return state;
  }
};
