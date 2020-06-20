import { WS_CONNECT, SAVE_POST, addPost } from '../actions';

let socketCanal;

export const socket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      socketCanal = window.io('http://localhost:8080');

      socketCanal.on('connected_user', (msg) => console.log(msg));

      socketCanal.on('receive_post', (post) => {
        store.dispatch(addPost(post));
      });
      break;
    case SAVE_POST:
      socketCanal.emit('add_post', action.post);
      break;
    default:
      next(action);
  }
};
