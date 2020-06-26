import {
  WS_CONNECT,
  addPost,
  removePost,
  removeContact,
  addContactRequest,
  addContact,
  savePosts,
} from '../actions';

let socketCanal;

export const socket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      socketCanal = window.io('http://localhost:8080');

      socketCanal.on('connected_user', (msg) => console.log(msg));

      socketCanal.on('receive_post', (post) => {
        store.dispatch(addPost(post));
      });

      // Used to update author avatar
      socketCanal.on('save_posts', (posts) => {
        store.dispatch(savePosts(posts));
      });

      socketCanal.on('delete_post', (id) => {
        store.dispatch(removePost(+id));
      });

      socketCanal.on('add_contact', ({ contactInfos }) => {
        const contact = {
          ...contactInfos.user,
          pendingRequests: contactInfos.pendingRequests,
          contacts: contactInfos.contacts,
        };
        delete contact.password;
        store.dispatch(addContactRequest(contact));
      });

      socketCanal.on('accept_contact', ({ contactInfos }) => {
        const contact = {
          ...contactInfos.user,
          pendingRequests: contactInfos.pendingRequests,
          contacts: contactInfos.contacts,
        };
        delete contact.password;
        store.dispatch(addContact(contact));
      });

      socketCanal.on('delete_contact', ({ contactInfos }) => {
        const contact = {
          ...contactInfos.user,
          pendingRequests: contactInfos.pendingRequests,
          contacts: contactInfos.contacts,
        };
        delete contact.password;

        store.dispatch(removeContact(contact));
      });
      break;

    default:
      next(action);
  }
};
