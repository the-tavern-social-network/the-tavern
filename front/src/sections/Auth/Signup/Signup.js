/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Field from '../../../containers/components/Field';
import CrossButton from '../../../assets/images/boutoncroix.svg';
import Scroll from '../../../assets/images/scroll.svg';
import Presentation from '../Home/Presentation/Presentation';
import styles from './Signup.module.scss';
import ErrorMessage from '../../../components/Error/ErrorMessage';

const Signup = ({ history, signup, resetFields, hasError, unsetError, errorMessage, resolve, isResolve }) => {
  
  const [targetDiffRender, setTargetDiffRender] = useState(0) 

  useEffect(() => {
    if (resolve) {
      history.push(`/auth/connexion`);
      unsetError();
      isResolve();
    };
  }, [resolve, hasError]);
  

  const clickHandler = () => {
    history.push('/auth');
  };
  
  const signupFormHandler = (event) => {
    event.preventDefault();
    setTargetDiffRender(targetDiffRender + 1);
    signup();    
    resetFields('auth');
  };

  return (
    <>
      <Presentation />
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
            cssClass={[styles.Signup__Field, styles.Signup__Email].join(' ')}
            reducerName="auth"
            placeholder="exemple@tavern.com"
            type="email"
            name="email"
          />
          <label htmlFor="username">Pseudo</label>
          <Field
            id="username"
            cssClass={[styles.Signup__Field, styles.Signup__Username].join(' ')}
            reducerName="auth"
            placeholder="12 caractère max"
            name="username"
          />
          <label htmlFor="birthdate">Date de naissance</label>
          <Field
            id="birthdate"
            cssClass={[styles.Signup__Field, styles.Signup__Birthdate].join(' ')}
            reducerName="auth"
            type="date"
            name="birthdate"
          />
          <label htmlFor="password">Mot de passe</label>
          <Field
            id="password"
            cssClass={[styles.Signup__Field, styles.Signup__Password].join(' ')}
            reducerName="auth"
            placeholder="*****"
            type="password"
            name="password"
          />
          <label htmlFor="confirm-password">Confirmation mot de passe</label>
          <Field
            id="confirm-password"
            cssClass={[styles.Signup__Field, styles.Signup__ConfirmPassword].join(' ')}
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
};

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
};

export default Signup;
