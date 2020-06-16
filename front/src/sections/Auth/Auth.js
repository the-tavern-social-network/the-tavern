import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import Home from '../../sections/Auth/Home/Home';
import Connection from '../../sections/Auth/Connection/Connection';
import Signin from '../../sections/Auth/Signin/Signin';

const Auth = ({ match }) => {
  return (
    <>
      <Layout section="auth">
        <Switch>
          <Route exact path={`${match.path}`} component={Home} />
          <Route path={`${match.path}/connexion`} component={Connection} />
          <Route path={`${match.path}/inscription`} component={Signin} />
        </Switch>
      </Layout>
    </>
  );
};

// Auth.propTypes = {};

export default Auth;
