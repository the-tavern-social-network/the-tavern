import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Field from '../../../containers/components/Field';

const Signin = ({ login, resetFields }) => {
  const signinFormHandler = (event) => {
    event.preventDefault();
    login();
    resetFields();
  };

  return (
    <form onSubmit={signinFormHandler}>
      <Field reducerName="auth" placeholder="Email" type="email" name="signinEmail" />
      <Field reducerName="auth" placeholder="Mot de passe" type="password" name="signinPassword" />
      <Link to="/auth/inscription">inscription</Link>
      <button>Connexion</button>
    </form>
  );
};

Signin.propTypes = {};

export default Signin;
