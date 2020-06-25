import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../../containers/TheTavern/components/Nav';
import Video from '../Video/Video';

import logo from '../../assets/images/logo1.svg';
import styles from './Layout.module.scss';

const Layout = ({ section, children }) => {
  let layout;

  switch (section) {
    case 'auth':
      layout = (
        <div className={styles.Auth}>
          <header className={styles.Auth__Logo}>
            <img src={logo} alt="logo TheTavern" />
          </header>
          <main className={styles.Auth__Main}>
            {children}
            <Video />
          </main>
          <footer className={styles.Auth__Footer}>© thetavern | Tous droits réservés | 2020</footer>
        </div>
      );
      break;
    case 'admin':
      layout = <main>{children}</main>;
      break;
    default:
      layout = (
        <>
          <div className={styles.Main}>
            <Nav />
            <main className={styles.Main__Main}>{children}</main>
            <footer className={styles.Main__Footer}>
              © thetavern | Tous droits réservés | 2020
            </footer>
          </div>
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
