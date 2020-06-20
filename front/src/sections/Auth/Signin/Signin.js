/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CrossButton from '../../../assets/images/boutoncroix.svg';
import Field from '../../../containers/components/Field';

import styles from './Signin.module.scss';

const Signin = ({ history, login, resetFields, isLoggedIn }) => {
  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
      resetFields('auth');
    }
  }, [isLoggedIn]);

  const clickHandler = (event) => {
    history.push('/auth');
  };

  const signinFormHandler = (event) => {
    event.preventDefault();
    login();
  };

  return (
    <form onSubmit={signinFormHandler} className={styles.Signin}>
      <img
        onClick={clickHandler}
        className={styles.Signin__CrossSword}
        src={CrossButton}
        alt="bouton de fermeture"
      />
      <div className={styles.Signin__Container}>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          reducerName="auth"
          placeholder="test@test.com"
          type="email"
          name="signinEmail"
          cssClass={[styles.Signin__Email, styles.Signin__Field].join(' ')}
        />
        <label htmlFor="password">Mot de passe</label>
        <Field
          id="password"
          reducerName="auth"
          placeholder="azerty"
          type="password"
          name="signinPassword"
          cssClass={[styles.Signin__Password, styles.Signin__Field].join(' ')}
        />
        <div className={styles.Signin__Btn__Container}>
          <Link className={styles.Signin__Signup} to="/auth/inscription">
            Pas encore inscrit ?
          </Link>
          <button className={styles.Signin__Btn}>Connexion</button>
        </div>
      </div>
    </form>
  );
};

Signin.propTypes = {
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Signin;
