import { WS_CONNECT, SAVE_POST, addPost, removePost, SAVE_DELETE_POST } from '../actions';
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

      socketCanal.on('remove_post', (id) => {
        console.log(id);
        store.dispatch(removePost(id));
      });

     

    
      break;
    case SAVE_POST:
      socketCanal.emit('add_post', action.post);
      break;

    case SAVE_DELETE_POST:
      console.log('save_delete_post');
      console.log('action.id' + action.id_post)
      socketCanal.emit('delete_post', action.id_post);
      break;
    default:
      next(action);
  }
};
