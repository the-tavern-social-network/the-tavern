import axios from 'axios';
import { ADD_CONTACT, setLoading, setError } from '../actions';
import { apiUrl } from '../util/index';

export const user = (store) => (next) => async (action) => {
  const { user } = store.getState();
  switch (action.type) {
    case ADD_CONTACT:
      try {
        store.dispatch(setLoading());
        const contact_one = user.loggedUser.id;
        const contact_two = action.contactId;

        const { data } = await axios.post(`${apiUrl}/contact/${contact_one}/add/${contact_two}`);

        console.log(data);
      } catch (err) {
        store.dispatch(setError());
      } finally {
        store.dispatch(setLoading());
      }
      break;
    default:
      next(action);
  }
};
