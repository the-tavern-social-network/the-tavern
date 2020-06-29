import React from 'react';
import notFound from '../../assets/images/404.png'

import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
  <img className={styles.NotFound} src={notFound} alt="Not found"/>
);
}

export default NotFound;
