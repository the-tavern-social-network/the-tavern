import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../containers/ProtectedRoute';

import Auth from '../sections/Auth/Auth';
import TheTavern from '../sections/TheTavern/TheTavern';
import { useEffect } from 'react';

const App = ({ isUserLogged, fetchPosts }) => {
  useEffect(() => {
    isUserLogged();
    fetchPosts();
  }, []);
  return (
    <>
      <Router>
        <Switch>
          {/* Maybe in the future ;) */}
          {/* <Route path='/admin' component={Admin} /> */}
          <Route path="/auth" component={Auth} />
          {/* TODO protected Route */}
          <ProtectedRoute path="/" component={TheTavern} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
