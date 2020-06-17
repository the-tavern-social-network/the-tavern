import axios from 'axios';
import { FETCH_POSTS, savePosts, setLoading, setError, POST } from '../actions';
import { apiUrl } from '../util/index';

export const post = (store) => (next) => async (action) => {
  const { post, user } = store.getState();
  switch (action.type) {
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

        const { data: posts } = await axios.get(`${apiUrl}/post`, postData);

        store.dispatch(savePosts(posts));
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
