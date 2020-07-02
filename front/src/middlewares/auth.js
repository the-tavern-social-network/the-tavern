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
  isResolve,
} from '../actions';
import { apiUrl } from '../util/index';
import avatar from '../assets/images/avatar/Avatardefault.png';

export const auth = (store) => (next) => async (action) => {
  const { auth } = store.getState();
  switch (action.type) {
    case SIGNUP:
      try {
        const data = {
          email: auth.email,
          avatar,
          password: auth.password,
          confirmPassword: auth.confirmPassword,
          username: auth.username,
          birthdate: auth.birthdate,
        };
        const { data: user } = await axios.post(`${apiUrl}/auth/signup`, data);

        delete user.password;
        store.dispatch(isResolve());
      } catch (err) {
        console.log(err);
        // console.log(err.response.data.message)
        store.dispatch(setError(err.response.data.message));
      }
      break;
    case LOGIN:
      try {
        store.dispatch(setLoading());
        const loginData = {
          email: auth.email,
          password: auth.password,
        };

        const { data } = await axios.post(`${apiUrl}/auth/login`, loginData, {
          withCredentials: true,
        });

        delete data.user.password;
        data.user.pendingRequests = data.pendingRequests;
        data.user.tavernRequests = data.tavernRequests;
        data.user.contacts = data.contacts;

        store.dispatch(connect(data));
      } catch (err) {
        console.log(err);
        store.dispatch(setError(err.response.data.message));
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
        data.user.tavernRequests = data.tavernRequests;
        data.user.contacts = data.contacts;

        if (data.isLoggedIn) {
          store.dispatch(connect(data));
        }
      } catch (err) {
        store.dispatch(connect({ user: null, isLoggedIn: false }));
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
