
/*import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Layout from '../../components/Layout/Layout';

import Tavern from '../../containers/TheTavern/Tavern/Tavern';
import UserAccount from './UserAccount/UserAccount';
import Thread from './Thread/Thread';

const TheTavern = ({ logout }) => {
  const tavernId = uuidv4();
  return (
    <>
      <Layout section="TheTavern">
        <NavLink exact to="/">
          Thread
        </NavLink>
        <NavLink exact to={`/tavern/${tavernId}`}>
          Tavern
        </NavLink>
        <NavLink exact to="/compte">
          Compte
        </NavLink>
        <button onClick={logout}>Déconnexion</button>

        <Switch>
          <Route path="/tavern/:id" component={Tavern} />
          <Route path="/compte" component={UserAccount} />
          <Route exact path="/" component={Thread} />
          <Route>404</Route>
        </Switch>
      </Layout>
    </>
  );
};

// TheTavern.propTypes = {};

export default TheTavern; */

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

import Tavern from '../../containers/TheTavern/Tavern/Tavern';
import UserAccount from '../../containers/TheTavern/UserAccount/UserAccount';
import Thread from './Thread/Thread';

const TheTavern = ({ wsConnect, logout }) => {
  useEffect(() => {
    wsConnect();
  }, []);
  return (
    <>
      <Layout section="TheTavern">
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

