import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from '../sections/Auth/Auth';
import TheTavern from '../sections/TheTavern/TheTavern';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* Maybe in the future ;) */}
          {/* <Route path='/admin' component={Admin} /> */}
          <Route path="/auth" component={Auth} />
          {/* TODO protected Route */}
          <Route path="/" component={TheTavern} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
