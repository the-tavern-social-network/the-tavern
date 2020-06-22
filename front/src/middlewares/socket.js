import { WS_CONNECT, addPost, removePost } from '../actions';

let socketCanal;

export const socket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      socketCanal = window.io('http://localhost:8080');

      socketCanal.on('connected_user', (msg) => console.log(msg));

      socketCanal.on('receive_post', (post) => {
        store.dispatch(addPost(post));
      });

      socketCanal.on("delete_post", (id) => { 
        store.dispatch(removePost(+id));
      })
      break;
    default:
      next(action);
  }
};
