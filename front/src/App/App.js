/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../containers/ProtectedRoute';

import Auth from '../sections/Auth/Auth';
import TheTavern from '../sections/TheTavern/TheTavern';
import { useEffect } from 'react';

const App = ({ history, isUserLogged, fetchPosts, isLoggedIn, isInitialLoading }) => {
  useEffect(() => {
    isUserLogged();
    fetchPosts();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn]);

  return (
    <>
      {!isInitialLoading && (
        <Switch>
          <>
            {/* Maybe in the future ;) */}
            {/* <Route path='/admin' component={Admin} /> */}
            <Route path="/auth" component={Auth} />
            {/* TODO protected Route */}
            <ProtectedRoute path="/" component={TheTavern} />
          </>
        </Switch>
      )}
    </>
  );
};

export default App;
