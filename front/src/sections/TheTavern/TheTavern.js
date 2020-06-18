import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

import Tavern from '../../containers/TheTavern/Tavern/Tavern';
import UserAccount from './UserAccount/UserAccount';
import Thread from './Thread/Thread';

const TheTavern = ({ wsConnect }) => {
  useEffect(() => {
    wsConnect();
  }, []);

  return (
    <>
      <Layout section="TheTavern">
        <Link to="/">Thread</Link>
        <Link to="/tavern">Tavern</Link>
        <Link to="/compte">Compte</Link>
        <Switch>
          <Route path="/tavern" component={Tavern} />
          <Route path="/compte" component={UserAccount} />
          <Route exact path="/" render={(routeProps) => <Thread {...routeProps}/>} />
          <Route>404</Route>
        </Switch>
      </Layout>
    </>
  );
};

// TheTavern.propTypes = {};

export default TheTavern;
