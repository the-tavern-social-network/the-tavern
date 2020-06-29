import React from 'react';
import PropTypes from 'prop-types';

import styles from './InvitationHeader.module.scss';

const InvitationHeader = ({ label, number }) => {
  return (
    <div className={styles.InvitationHeader}>
      <div>{label}</div>
      {
        number > 0 &&
        <span className={styles.InvitationHeader__Number}>{number}</span>
      }
    </div>
  );
};

InvitationHeader.propTypes = {};

export default InvitationHeader;
