import { combineReducers } from 'redux';
import tavern from './tavern';
import auth from './auth';
import user from './user';
import post from './post';
import global from './global';

export default combineReducers({ global, tavern, auth, user, post });
