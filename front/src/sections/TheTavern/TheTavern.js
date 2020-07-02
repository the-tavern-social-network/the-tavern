/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

import Tavern from '../../containers/TheTavern/Tavern/Tavern';
import UserAccount from '../../containers/TheTavern/UserAccount/UserAccount';
import Thread from './Thread/Thread';
import NotFound from '../../components/NotFound/NotFound';

const TheTavern = ({ wsConnect }) => {
  useEffect(() => {
    wsConnect();
  }, []);

  return (
    <>
      <Switch>
        <Route path="/tavern/:id" component={Tavern} />
        <Layout section="TheTavern">
          <Switch>
            <Route path="/compte" component={UserAccount} />
            <Route exact path="/" component={Thread} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Switch>
    </>
  );
};

// TheTavern.propTypes = {};

export default TheTavern;
