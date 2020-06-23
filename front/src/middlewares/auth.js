import axios from 'axios';
import {
  LOGIN,
  IS_LOGGED_IN,
  LOGOUT,
  connect,
  disconnect,
  setLoading,
  setInitialLoading,
  setError,
  SIGNUP,
} from '../actions';
import { apiUrl } from '../util/index';

export const auth = (store) => (next) => async (action) => {
  const { auth } = store.getState();
  switch (action.type) {
    case SIGNUP:
      try {
        const data = {
          email: auth.signupEmail,
          password: auth.signupPassword,
          username: auth.signupUsername,
          birthdate: auth.signupBirthdate,
        };
        const { data: user } = await axios.post(`${apiUrl}/auth/signup`, data);

        delete user.password;
      } catch (err) {
        console.trace(err);
      }
      break;
    case LOGIN:
      try {
        store.dispatch(setLoading());
        const loginData = {
          email: auth.signinEmail,
          password: auth.signinPassword,
        };

        const { data } = await axios.post(`${apiUrl}/auth/login`, loginData, {
          withCredentials: true,
        });

        delete data.user.password;
        data.user.pendingRequests = data.pendingRequests;

        store.dispatch(connect(data));
      } catch (err) {
        store.dispatch(setError());
      } finally {
        store.dispatch(setLoading());
      }
      break;
    case IS_LOGGED_IN:
      store.dispatch(setInitialLoading());
      try {
        const { data } = await axios.post(
          `${apiUrl}/auth/is-logged-in`,
          {},
          {
            withCredentials: true,
          },
        );

        delete data.user.password;
        data.user.pendingRequests = data.pendingRequests;

        if (data.isLoggedIn) {
          store.dispatch(connect(data));
        }
      } catch (err) {
        store.dispatch(setError());
      } finally {
        store.dispatch(setInitialLoading());
      }
      break;
    case LOGOUT:
      try {
        store.dispatch(setLoading());
        const { data } = await axios.post(`${apiUrl}/auth/logout`, {}, { withCredentials: true });

        store.dispatch(disconnect(data));
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
