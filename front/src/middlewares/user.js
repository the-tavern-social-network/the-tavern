import axios from 'axios';
import { EDIT_USER_ACCOUNT, setLoading, setError } from '../actions';
import { apiUrl } from '../util/index';

export const user = (store) => (next) => async (action) => {
  const { user } = store.getState();
  switch (action.type) {
    case EDIT_USER_ACCOUNT:
      try {
        store.dispatch(setLoading());
        let userData = {
          description: user.description,
        }
        
        const { data: updatedUser } = await axios.patch(`${apiUrl}/user/${user.loggedUser.id}`, userData)
        
        delete updatedUser.password;
        
        action.user = updatedUser
        
        next(action)
      } catch (err) {
        console.trace(err);
      } finally {
        store.dispatch(setLoading());
      }
      break;
    default:
      next(action);
  }
};
