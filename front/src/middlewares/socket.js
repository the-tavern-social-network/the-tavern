import { WS_CONNECT, SAVE_POST, addPost } from '../actions';
import axios from 'axios';

let socketCanal;

export const socket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      socketCanal = window.io('http://localhost:8080');

      socketCanal.on("connected_user", msg => console.log(msg));

      socketCanal.on('receive_post', (post) => {
      store.dispatch(addPost(post));
      });
      break;
    case SAVE_POST:
      console.log("SAVE_POST")
      socketCanal.emit('add_post', action.post);
    default:
      next(action);
  }
};
