import axios from 'axios';
import { ADD_CONTACT, EDIT_USER_ACCOUNT, setLoading, setError } from '../actions';
import { apiUrl } from '../util/index';

export const user = (store) => (next) => async (action) => {
  const { user } = store.getState();
  switch (action.type) {
    case ADD_CONTACT:
      try {
        store.dispatch(setLoading());
        const user_id = user.loggedUser.id;
        const contact_id = action.contactId;

        const { data } = await axios.post(`${apiUrl}/contact/${user_id}/add/${contact_id}`);

        console.log(data);
      } catch (err) {
        store.dispatch(setError());
      } finally {
        store.dispatch(setLoading());
      }
      break;
    case EDIT_USER_ACCOUNT:
      try {
        store.dispatch(setLoading());
        let userData = {
          description: user.description,
        };

        const { data: updatedUser } = await axios.patch(
          `${apiUrl}/user/${user.loggedUser.id}`,
          userData,
        );

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
