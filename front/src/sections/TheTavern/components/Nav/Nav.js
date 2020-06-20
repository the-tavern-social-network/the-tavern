import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import NavLinks from './NavLinks/NavLinks';

import logo from '../../../../assets/images/logo1.svg';
import menu from '../../../../assets/images/menu.svg';
import styles from './Nav.module.scss';

const Nav = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Nav__Header}>
      <div className={styles.Welcome}>
        <h1>Bienvenue</h1>
        <h2 className={styles.Welcome__User}>Nom Utilisateur</h2>
      </div>
      <nav className={styles.Nav}>
        <Link to="/" className={styles.Nav__Logo}>
          <img src={logo} alt="logo TheTavern" />
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? styles.Nav__Menu__Open : styles.Nav__Menu}>
          <img src={menu} alt="menu de navigation" />
        </div>
        {isOpen && <NavLinks logout={logout} />}
      </nav>
    </div>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Nav;
