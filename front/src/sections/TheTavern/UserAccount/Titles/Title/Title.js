import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Title.module.scss';

const Title = React.forwardRef(({ name, selectTitle, show }, ref) => {

  return (
    <li ref={ref} className={styles.Title} onClick={selectTitle}>{name}</li>
  )
});
  
Title.propTypes = {
  
};

export default Title;