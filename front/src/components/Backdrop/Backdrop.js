import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.module.scss';

const Backdrop = ({ clicked }) => <div onClick={clicked} className={classes.Backdrop}></div>;

Backdrop.propTypes = {
  clicked: PropTypes.func,
};

Backdrop.defaultProps = {
  clicked: () => '',
};

export default Backdrop;
