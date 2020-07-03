import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import NavLinks from './NavLinks/NavLinks';
import Sword from '../../../../components/Sword/Sword';

import logo from '../../../../assets/images/logo1.svg';
import styles from './Nav.module.scss';
import './Swords-styles.scss';

const Nav = ({ logout, user, tavernId }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Nav__Header}>
      <div className={styles.Nav__Header__Welcome}>
        <h1>Bienvenue</h1>
        <h2 className={styles.Nav__Header__Welcome__User}>{user.username}</h2>
        <span className={styles.Nav__Header__Welcome__Title}>{user.title}</span>
      </div>
      <nav className={styles.Nav}>
        <Link to="/" className={styles.Nav__Logo}>
          <img src={logo} alt="logo TheTavern" title="Retour à l' accueil" />
        </Link>
        <div className={styles.Nav__Menu__Container}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? styles.Nav__Menu__Open : styles.Nav__Menu}>
            <div className="sword-menu">
              <Sword isOpen={isOpen} />
              <Sword isOpen={isOpen} />
              <Sword isOpen={isOpen} />
            </div>
          </div>
          <NavLinks
            tavernId={tavernId}
            logout={logout}
            isOpen={isOpen}
            setIsOpen={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>
    </div>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Nav;
