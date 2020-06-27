/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

import Tavern from '../../containers/TheTavern/Tavern/Tavern';
import UserAccount from '../../containers/TheTavern/UserAccount/UserAccount';
import Thread from './Thread/Thread';

const TheTavern = ({ wsConnect }) => {
  useEffect(() => {
    wsConnect();
  }, []);

  return (
    <>
      <Layout section="TheTavern">
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

export default TheTavern;
