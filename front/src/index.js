import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import axios from 'axios';
// import { loadErrors } from '../src/actions/error';
// import ErrorHandler from './components/Error/errorHandler';

import './assets/scss/index.scss';
import store from './store';

import App from './containers/App/App';


ReactDOM.render(
  <Provider store={store}>
    {/* <ErrorHandler /> */}
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
  // console.log(ErrorHandler),
);

  
// // Response interceptor.
// axios.interceptors.response.use(
//   function(response) {
//     // Do something with response data
//     return response;
//   },
//   function(error) {
//     store.dispatch(loadErrors(error));
//     return Promise.reject(error);
//   }
// );