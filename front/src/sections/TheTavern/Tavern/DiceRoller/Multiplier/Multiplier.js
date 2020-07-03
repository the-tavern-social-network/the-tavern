import React from 'react';
import PropTypes from 'prop-types';

import styles from './Multiplier.module.scss';

const Multiplier = ({ update }) => {
  return (
    <input
      className={styles.Multiplier}
      type="number"
      pattern="[0-9]*"
      min="1"
      max="10"
      placeholder="1"
      onChange={update}
    />
  );
};

Multiplier.propTypes = {};

export default Multiplier;
