import { combineReducers } from 'redux';
import chat from './chat';
import auth from './auth';

export default combineReducers({ chat, auth });
