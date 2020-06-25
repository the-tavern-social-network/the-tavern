import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isLoggedIn, hasTriedToAuthenticate, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (hasTriedToAuthenticate) {
          if (isLoggedIn) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/auth" />;
          }
        } else {
          return (
          null
          );
        }
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
  isLoggedIn: false,
};

export default ProtectedRoute;
