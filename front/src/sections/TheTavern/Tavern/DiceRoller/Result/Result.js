import React from 'react';
import PropTypes from 'prop-types';

import styles from './Result.module.scss';

const Result = ({ result }) => {
  return <p className={styles.Result}>{result}</p>;
};

Result.propTypes = {};

export default Result;
