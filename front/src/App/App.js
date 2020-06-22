/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import ProtectedRoute from '../containers/ProtectedRoute';

// import Auth from '../sections/Auth/Auth';
// import TheTavern from '../containers/TheTavern/TheTavern'
import Thread from '../sections/TheTavern/Thread/Thread'


const App = ({ history, isUserLogged, fetchPosts, isLoggedIn, isInitialLoading }) => {
  useEffect(() => {
    isUserLogged();
    fetchPosts();
  }, [isUserLogged, fetchPosts]);
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
