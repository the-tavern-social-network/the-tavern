import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './NavLinks.module.scss';

const NavLinks = ({ logout }) => {
  return (
    <ul className={styles.NavLinks}>
      <li>
        <NavLink exact to="/">
          Thread
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/tavern">
          Tavern
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/compte">
          Compte
        </NavLink>
      </li>
      <li>
        <button onClick={logout}>Déconnexion</button>
      </li>
    </ul>
  );
};

NavLinks.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavLinks;
