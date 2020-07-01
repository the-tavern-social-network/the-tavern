import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.module.scss';

const Title = React.forwardRef(({ name, selectTitle }, ref) => {
  return (
    <li ref={ref} className={styles.Title} onClick={selectTitle}>
      {name}
    </li>
  );
});

Title.propTypes = {
  name: PropTypes.string.isRequired,
  selectTitle: PropTypes.func.isRequired,
};

export default Title;
