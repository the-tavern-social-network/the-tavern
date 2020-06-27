import { combineReducers } from 'redux';
import tavern from './tavern';
import auth from './auth';
import user from './user';
import post from './post';
import global from './global';
// import error from './error';

export default combineReducers({ global, tavern, auth, user, post });
