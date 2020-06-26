import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.scss'
const ErrorMessage = ({ message, cssClass }) => (
  <div className={cssClass}>
    <p>{message}</p>
  </div>
);

ErrorMessage.propTypes = {
message : PropTypes.string.isRequired,
};
export default ErrorMessage;
