import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { auth, post, socket } from '../middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(auth, post, socket));

const store = createStore(rootReducer, enhancers);

export default store;
