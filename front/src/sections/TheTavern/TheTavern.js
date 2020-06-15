import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

import Tavern from './Tavern/Tavern';
import UserAccount from './UserAccount/UserAccount';
import Thread from './Thread/Thread';

const TheTavern = (props) => {
  return (
    <>
      <Layout>
        <Link to="/">Thread</Link>
        <Link to="/tavern">Tavern</Link>
        <Link to="/compte">Compte</Link>
        <Switch>
          <Route path="/tavern" component={Tavern} />
          <Route path="/compte" component={UserAccount} />
          <Route exact path="/" component={Thread} />
          <Route>404</Route>
        </Switch>
      </Layout>
    </>
  );
};

// TheTavern.propTypes = {};

export default TheTavern;
