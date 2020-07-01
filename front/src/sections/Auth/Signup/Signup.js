/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as EmailValidator from 'email-validator';

import Field from '../../../containers/components/Field';
import CrossButton from '../../../assets/images/boutoncroix.svg';
import Scroll from '../../../assets/images/scroll.svg';
import Presentation from '../Home/Presentation/Presentation';
import styles from './Signup.module.scss';
import ErrorMessage from '../../../components/Error/ErrorMessage';

import { websiteName } from '../../../util';

const Signup = ({
  history,
  signup,
  resetFields,
  hasError,
  unsetError,
  errorMessage,
  resolve,
  isResolve,
  email,
  username,
  birthdate,
  password,
  confirmPassword,
  setError
}) => {
  useEffect(() => {
    if (resolve) {
      history.push(`/auth/connexion`);
      isResolve();
    };
  }, [resolve, hasError]);

  useEffect(() => {
    unsetError();
    resetFields('auth');
  }, []);
  
  useEffect(() => {
    document.title = `${websiteName} | Inscription`
  }, [document.title]);
  
  const clickHandler = () => {
    history.push('/auth');
    resetFields('auth');
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
    if (!email || !username || !birthdate || !password || !confirmPassword) {
      return setError("Tous les champs doivent être renseignés", 'all fields', {
        email: !email && true,
        username: !username && true,
        birthdate: !birthdate && true,
        password: !password && true,
        confirmPassword: !confirmPassword && true,
      });
    } else if (!EmailValidator.validate(email)) {
      return setError("L'email doit être un email valide", 'email')
    } else if (username.length > 12) {
      return setError('Le pseudo ne doit pas excéder 12 caractères', "username too long");
    }
    else if (password !== confirmPassword) {
      return setError('Les mots de passe doivent être identiques', "password not matching");
    } else if (password) {
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasNonalphas = /\W/.test(password);
      if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasNonalphas || password.length < 8) {
        return setError("Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial", "invalid password");
      }
    }
    signup();
    resetFields('auth');
  }


  return (
    <>
      {window.matchMedia('(min-width: 768px)').matches && <Presentation />}
      <form onSubmit={signupFormHandler} className={styles.Signup}>
        <img
          onClick={clickHandler}
          alt="bouton de fermeture"
          className={styles.Signup__CrossSword}
          src={CrossButton}
        />
        <div className={styles.Signup__Container}>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            cssClass={
              hasError.email
                ? [styles.Signup__Field, styles.Signup__Email, styles.Signup__HasError].join(' ')
                : [styles.Signup__Field, styles.Signup__Email].join(' ')
            }
            reducerName="auth"
            placeholder="exemple@tavern.com"
            type="email"
            name="email"
          />
          <label htmlFor="username">Pseudo</label>
          <Field
            id="username"
            cssClass={
              hasError.username
                ? [styles.Signup__Field, styles.Signup__Username, styles.Signup__HasError].join(' ')
                : [styles.Signup__Field, styles.Signup__Username].join(' ')
            }
            reducerName="auth"
            placeholder="12 caractères max"
            name="username"
          />
          <label htmlFor="birthdate">Date de naissance</label>
          <Field
            id="birthdate"
            cssClass={
              hasError.birthdate
                ? [styles.Signup__Field, styles.Signup__Birthdate, styles.Signup__HasError].join(' ')
                : [styles.Signup__Field, styles.Signup__Birthdate].join(' ')
            }
            reducerName="auth"
            type="date"
            name="birthdate"
          />
          <label htmlFor="password">Mot de passe</label>
          <Field
            id="password"
            cssClass={
              hasError.password
                ? [styles.Signup__Field, styles.Signup__Password, styles.Signup__HasError].join(' ')
                : [styles.Signup__Field, styles.Signup__Password].join(' ')
            }
            reducerName="auth"
            placeholder="*****"
            type="password"
            name="password"
          />
          <label htmlFor="confirm-password">Confirmation mot de passe</label>
          <Field
            id="confirm-password"
            cssClass={
              hasError.confirmPassword
                ? [styles.Signup__Field, styles.Signup__Password, styles.Signup__HasError].join(' ')
                : [styles.Signup__Field, styles.Signup__ConfirmPassword].join(' ')
            }
            reducerName="auth"
            placeholder="*****"
            type="password"
            name="confirmPassword"
          />
          {hasError && <ErrorMessage message={errorMessage} />}
          <button className={styles.Signup__Btn}>
            <img className={styles.Signup__Btn__Scroll} src={Scroll} alt="parchemin" />
            S'inscrire
          </button>
        </div>
      </form>
    </>
  );
}


Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
};

export default Signup;
