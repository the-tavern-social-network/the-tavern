/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../containers/ProtectedRoute';

import Auth from '../sections/Auth/Auth';
import TheTavern from '../containers/TheTavern/TheTavern';
import { useEffect } from 'react';

const App = ({ isUserLogged, fetchPosts, isInitialLoading }) => {
  useEffect(() => {
    isUserLogged();
    fetchPosts();
  }, []);

  return (
    <>
      {!isInitialLoading && (
        <Switch>
          <>
            <Route path="/admin">
              test
            </Route>
            <Route path="/auth" component={Auth} />
            <ProtectedRoute path="/" component={TheTavern} />
          </>
        </Switch>
      )}
    </>
  );
};

export default App;
