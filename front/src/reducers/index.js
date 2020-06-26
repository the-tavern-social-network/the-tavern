import { combineReducers } from 'redux';
import chat from './chat';
import auth from './auth';
import user from './user';
import post from './post';
import global from './global';
// import error from './error';

export default combineReducers({ global, chat, auth, user, post });
