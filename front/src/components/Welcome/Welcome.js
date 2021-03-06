import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ user, cssClass }) => (
  <div className={cssClass}>
    <h1>Bienvenue</h1>
    <h2>{user.username} <span>{user.title}</span></h2>
  </div>
);

Welcome.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  cssClass: PropTypes.string,
};

Welcome.defaultProps = {
  cssClass: '',
};

export default Welcome;
