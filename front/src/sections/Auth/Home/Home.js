import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Presentation from './Presentation/Presentation';
import styles from './Home.module.scss';

import { websiteName } from '../../../util';

const Home = ({ history, match }) => {
  const clickHandler = () => {
    history.push(`${match.path}/connexion`);
  };

  useEffect(() => {
    document.title = `${websiteName} | Authentification`;
  }, []);

  return (
    <>
      <Presentation />
      <div onClick={clickHandler} className={styles.Connexion__Container}>
        <Link to="/auth/connexion" className={styles.Connexion}>
          Connexion
        </Link>
        <div className={styles.Arrow}></div>
        <div></div>
      </div>
    </>
  );
};

export default Home;
