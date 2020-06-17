import { combineReducers } from 'redux';
import chat from './chat';
import auth from './auth';
import user from './user';
import post from './post';

export default combineReducers({ chat, auth, user, post });
