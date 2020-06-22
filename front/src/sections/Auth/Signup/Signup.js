/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Field from '../../../containers/components/Field';
import CrossButton from '../../../assets/images/boutoncroix.svg';
import styles from './Signup.module.scss';

const Signup = ({ history, signup, resetFields, isLoggedIn }) => {
  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn]);

  const clickHandler = (event) => {
    history.goBack();
  };

  const signupFormHandler = (event) => {
    event.preventDefault();
    signup();
    resetFields('auth');
  };

  return (
    <form onSubmit={signupFormHandler} className={styles.Signup}>
      <img onClick={clickHandler} className={styles.Signup__CrossSword} src={CrossButton} />
      <div className={styles.Signup__Container}>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          cssClass={[styles.Signup__Field, styles.Signup__Email].join(' ')}
          reducerName="auth"
          placeholder="Email"
          type="email"
          name="signupEmail"
        />
        <label htmlFor="username">Pseudo</label>
        <Field
          id="username"
          cssClass={[styles.Signup__Field, styles.Signup__Username].join(' ')}
          reducerName="auth"
          placeholder="Pseudo"
          name="signupUsername"
        />
        <label htmlFor="birthdate">Date de naissance</label>
        <Field
          id="birthdate"
          cssClass={[styles.Signup__Field, styles.Signup__Birthdate].join(' ')}
          reducerName="auth"
          type="date"
          name="signupBirthdate"
        />
        <label htmlFor="password">Mot de passe</label>
        <Field
          id="password"
          cssClass={[styles.Signup__Field, styles.Signup__Password].join(' ')}
          reducerName="auth"
          placeholder="Mot de passe"
          type="password"
          name="signupPassword"
        />
        <label htmlFor="confirm-password">Confirmation mot de passe</label>
        <Field
          id="confirm-password"
          cssClass={[styles.Signup__Field, styles.Signup__ConfirmPassword].join(' ')}
          reducerName="auth"
          placeholder="Confirmation mot de passe"
          type="password"
          name="signupConfirmPassword"
        />
        <button className={styles.Signup__Btn}>S'inscrire</button>
      </div>
    </form>
  );
};

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
};

export default Signup;
