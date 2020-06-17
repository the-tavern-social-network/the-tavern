import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo1.svg';
import styles from './Layout.module.scss';

const Layout = ({ section, children }) => {
  let layout;

  switch (section) {
    case 'auth':
      layout = (
        <div className={styles.Auth}>
          <header className={styles.Logo}>
            <img src={logo} />
          </header>
          <main>{children}</main>
          <footer className={styles.Footer}>© thetavern | Tous droits réservés | 2020</footer>
        </div>
      );
      break;
    case 'admin':
      layout = <main>{children}</main>;
      break;
    default:
      layout = (
        <>
          <header>TAVERN HEADER</header>
          <main>{children}</main>
          <footer className={styles.Footer}>© thetavern | Tous droits réservés | 2020</footer>
        </>
      );
      break;
  }

  return <>{layout}</>;
};

Layout.propTypes = {
  section: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default Layout;
