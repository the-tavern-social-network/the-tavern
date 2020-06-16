import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import Home from '../../sections/Auth/Home/Home';
import Signin from '../../containers/Auth/Signin';
import Signup from '../../containers/Auth/Signup';

const Auth = ({ match }) => {
  return (
    <>
      <Layout section="auth">
        <Switch>
          <Route exact path={`${match.path}`} component={Home} />
          <Route path={`${match.path}/connexion`} component={Signin} />
          <Route path={`${match.path}/inscription`} component={Signup} />
        </Switch>
      </Layout>
    </>
  );
};

// Auth.propTypes = {};

export default Auth;
