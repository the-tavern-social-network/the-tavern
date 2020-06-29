/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CrossButton from '../../../assets/images/boutoncroix.svg';
import Shield from '../../../assets/images/shield.svg';
import Field from '../../../containers/components/Field';
import ErrorMessage from '../../../components/Error/ErrorMessage';
import Presentation from '../Home/Presentation/Presentation';
import styles from './Signin.module.scss';

const Signin = ({ match, history, login, resetFields, isLoggedIn, hasError, errorMessage }) => {
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
    <>
      { window.matchMedia('(min-width: 768px)').matches && <Presentation />}
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
            placeholder="exemple@tavern.com"
            type="email"
            name="email"
            cssClass={[styles.Signin__Email, styles.Signin__Field].join(' ')}
          />
          <label htmlFor="password">Mot de passe</label>
          <Field
            id="password"
            reducerName="auth"
            placeholder="*****"
            type="password"
            name="password"
            cssClass={[styles.Signin__Password, styles.Signin__Field].join(' ')}
          />
          {hasError && <ErrorMessage message={errorMessage} />}
          <div className={styles.Signin__Btn__Container}>
            <Link className={styles.Signin__Signup} to="/auth/inscription">
              Pas encore inscrit ?
            </Link>
            <button className={styles.Signin__Btn}>
              <img className={styles.Signin__Btn__Shield} src={Shield} alt="Bouclier" />
              Connexion
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

Signin.propTypes = {
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Signin;
