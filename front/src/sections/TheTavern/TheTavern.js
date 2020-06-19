import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route, NavLink } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

import Tavern from '../../containers/TheTavern/Tavern/Tavern';
import UserAccount from './UserAccount/UserAccount';
import Thread from './Thread/Thread';

const TheTavern = ({ wsConnect, logout }) => {
  useEffect(() => {
    wsConnect();
  }, []);
  return (
    <>
      <Layout section="TheTavern">
        <NavLink exact to="/">
          Thread
        </NavLink>
        <NavLink exact to="/tavern">
          Tavern
        </NavLink>
        <NavLink exact to="/compte">
          Compte
        </NavLink>
        <button onClick={logout}>Déconnexion</button>

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
