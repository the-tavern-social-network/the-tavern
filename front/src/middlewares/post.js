import axios from 'axios';
import { FETCH_POSTS, savePosts, setLoading, setError, POST, resetFields, DELETE_POST  } from '../actions';
import { apiUrl } from '../util/index';
export const post = (store) => (next) => async (action) => {
    const { post, user } = store.getState();
  switch (action.type) {
      case DELETE_POST:
        try {
          store.dispatch(setLoading());
          await axios.delete(`${apiUrl}/post/${action.id}`);
        const { data: posts } = await axios.get(`${apiUrl}/post`);
        posts.forEach((post) => store.dispatch(savePosts(post)));
      } catch (err) {
          console.trace(err);
          store.dispatch(setError());
      } finally {
          store.dispatch(setLoading());
      }
    case FETCH_POSTS:
      try {
          store.dispatch(setLoading());
          const { data: posts } = await axios.get(`${apiUrl}/post`);
        console.log(posts);
        posts.forEach((post) => store.dispatch(savePosts(post)));
        // store.dispatch(savePosts(posts));
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
        console.log(post.post);
        console.log(user.loggedUser.id);
        const { data: posts } = await axios.post(`${apiUrl}/post`, postData);
        store.dispatch(savePosts(posts));
      } catch (err) {
          console.trace(err);
        store.dispatch(setError());
      } finally {
          store.dispatch(resetFields('post'))
        store.dispatch(setLoading());
      }
      break;
    default:
      next(action);
  }
};
