import axios from 'axios';
import { FETCH_POSTS, savePosts, savePost, setLoading, setError, POST, DELETE_POST, removePost  } from '../actions';
import { apiUrl } from '../util/index';

export const post = (store) => (next) => async (action) => {
  const { post, user } = store.getState();
  switch (action.type) {
      case DELETE_POST:
        try {
        console.log(action);
        store.dispatch(setLoading());
        await axios.delete(`${apiUrl}/post/${action.id}`);
        store.dispatch(removePost(action.id));
      } catch (err) {
        console.trace(err);
        store.dispatch(setError());
      } finally {
        store.dispatch(setLoading());
      }
      break;
    case FETCH_POSTS:
      try {
        store.dispatch(setLoading());
        const { data: posts } = await axios.get(`${apiUrl}/post`);
        store.dispatch(savePosts(posts));
      } catch (err) {
        console.trace(err);
        store.dispatch(setError());
      } finally {
        store.dispatch(setLoading());
      }
      break;
    case POST:
      try {
        store.dispatch(setLoading());
        const postData = {
          content: post.post,
          user_id: user.loggedUser.id,
        };

        const { data: newPost } = await axios.post(`${apiUrl}/post`, postData);
        
        store.dispatch(savePost(newPost));
      } catch (err) {
        console.trace(err);
        store.dispatch(setError());
      } finally {
        store.dispatch(setLoading());
      }
      break;
    default:
      next(action);
  }
};
