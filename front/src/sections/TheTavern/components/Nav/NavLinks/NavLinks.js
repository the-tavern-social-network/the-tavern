import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './NavLinks.module.scss';
import deconnetion from '/Users/patmax/Desktop/Project-The-Tavern/front/src/assets/images/turn-off.svg';

const NavLinks = ({ logout, isOpen, setIsOpen }) => {
  console.log(isOpen)
  return (
    <ul className={!isOpen ? styles.NavLinks :[styles.NavLinks,styles.NavLinks__Open].join(' ')}>
      <li>
        <NavLink onClick={setIsOpen} exact to="/">
          Thread
        </NavLink>
      </li>
      <li>
        <NavLink onClick={setIsOpen} exact to="/tavern">
          Tavern
        </NavLink>
      </li>
      <li>
        <NavLink onClick={setIsOpen} exact to="/compte">
          Compte
        </NavLink>
      </li>
      <li>
        <span className={styles.NavLinks__Deconnexion} onClick={logout}><img src={deconnetion} alt="bouton deconnexion" /></span>
      </li>
    </ul>
  );
};

NavLinks.propTypes = {
  logout: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default NavLinks;
