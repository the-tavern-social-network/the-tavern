import {
  WS_CONNECT,
  addPost,
  removePost,
  removeContact,
  addContactRequest,
  addContact,
  contactUpdate,
  savePosts,
  tavernInvite,
  deleteTavernInvite,
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

      // Used to update author avatar on thread
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
          tavernRequests: contactInfos.tavernRequests,
          contacts: contactInfos.contacts,
        };

        delete contact.password;

        store.dispatch(addContactRequest(contact));
      });

      socketCanal.on('accept_contact', ({ contactInfos }) => {
        const contact = {
          ...contactInfos.user,
          pendingRequests: contactInfos.pendingRequests,
          tavernRequests: contactInfos.tavernRequests,
          contacts: contactInfos.contacts,
        };

        delete contact.password;

        store.dispatch(addContact(contact));
      });

      socketCanal.on('contact_update', (contact) => {
        delete contact.posts;

        store.dispatch(contactUpdate(contact));
      });

      socketCanal.on('delete_contact', ({ contactInfos }) => {
        const contact = {
          ...contactInfos.user,
          pendingRequests: contactInfos.pendingRequests,
          tavernRequests: contactInfos.tavernRequests,
          contacts: contactInfos.contacts,
        };

        delete contact.password;

        store.dispatch(removeContact(contact));
      });

      socketCanal.on('tavern_invite', ({ gamemaster, participantId, tavernId }) => {
        store.dispatch(tavernInvite(gamemaster, participantId, tavernId));
      });

      socketCanal.on('delete_tavern_invite', ({ participantId, tavernId }) => {
        store.dispatch(deleteTavernInvite(participantId, tavernId));
      });

      break;
    default:
      next(action);
  }
};
