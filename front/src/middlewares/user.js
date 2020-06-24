import axios from 'axios';
import {
  SEND_CONTACT_REQUEST,
  ACCEPT_CONTACT,
  DELETE_CONTACT,
  EDIT_USER_ACCOUNT,
  setLoading,
  setError,
} from '../actions';
import { apiUrl } from '../util/index';

export const user = (store) => (next) => async (action) => {
  const { user } = store.getState();
  switch (action.type) {
    case SEND_CONTACT_REQUEST:
      try {
        store.dispatch(setLoading());
        const user_id = user.loggedUser.id;
        const contact_id = action.contactId;

        const { data } = await axios.post(`${apiUrl}/contact/${user_id}/add/${contact_id}`);

        action.user = data.user;
        action.user.pendingRequests = data.pendingRequests;
        action.user.contacts = data.contacts;
        delete action.user.password;

        next(action);
      } catch (err) {
        store.dispatch(setError());
      } finally {
        store.dispatch(setLoading());
      }
      break;
    case ACCEPT_CONTACT:
      try {
        store.dispatch(setLoading());
        const user_id = +user.loggedUser.id;
        const contact_id = +action.contactId;

        const { data } = await axios.patch(`${apiUrl}/contact/${user_id}/accept/${contact_id}`);

        action.user = data.user;
        action.user.pendingRequests = data.pendingRequests;
        action.user.contacts = data.contacts;
        delete action.user.password;

        next(action);
      } catch (err) {
        store.dispatch(setError());
      } finally {
        store.dispatch(setLoading());
      }
      break;
    case DELETE_CONTACT:
      try {
        console.log(action);
        store.dispatch(setLoading());
        const user_id = user.loggedUser.id;
        const contact_id = action.contactId;

        await axios.delete(`${apiUrl}/contact/${user_id}/delete/${contact_id}`);

        next(action);
      } catch (err) {
        store.dispatch(setError());
      } finally {
        store.dispatch(setLoading());
      }
      break;
      break;
    case EDIT_USER_ACCOUNT:
      try {
        store.dispatch(setLoading());
        let userData = {
          description: user.description,
        };

        const { data } = await axios.patch(`${apiUrl}/user/${user.loggedUser.id}`, userData);

        const updatedUser = {
          ...data.user,
          pendingRequests: data.pendingRequests,
          contacts: data.contacts,
        };

        delete updatedUser.password;

        action.user = updatedUser;

        next(action);
      } catch (err) {
        store.dispatch(setError());
        console.trace(err);
      } finally {
        store.dispatch(setLoading());
      }
      break;
    default:
      next(action);
  }
};
