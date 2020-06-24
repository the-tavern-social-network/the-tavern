import { WS_CONNECT, addPost, removePost, removeContact, addContactRequest } from '../actions';

let socketCanal;

export const socket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      socketCanal = window.io('http://localhost:8080');

      socketCanal.on('connected_user', (msg) => console.log(msg));

      socketCanal.on('receive_post', (post) => {
        store.dispatch(addPost(post));
      });

      socketCanal.on('delete_post', (id) => {
        store.dispatch(removePost(+id));
      });

      socketCanal.on('add_contact', ({ user, contactInfos }) => {
        delete user.password;
        const contact = {
          ...contactInfos.user,
          pendingRequests: contactInfos.pendingRequests,
          contacts: contactInfos.contacts,
        };
        delete contact.password;
        store.dispatch(addContactRequest(user, contact));
      });

      socketCanal.on('accept_contact', ({ user, contact }) => {
        // TODO accept contact
        // TODO move both user and contact from pending requests to contacts
      });

      socketCanal.on('delete_contact', ({ userId, contactId }) => {
        store.dispatch(removeContact(userId, contactId));
      });
      break;

    default:
      next(action);
  }
};
