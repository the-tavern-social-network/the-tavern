import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../../containers/components/Field';
import { resetFields } from '../../../actions';

const Signup = ({ signup, resetFields }) => {
  const signupFormHandler = (event) => {
    event.preventDefault();
    signup();
    resetFields('auth');
  };

  return (
    <form onSubmit={signupFormHandler}>
      <Field reducerName="auth" placeholder="Email" type="email" name="signupEmail" />
      <Field reducerName="auth" placeholder="Pseudo" name="signupUsername" />
      <Field reducerName="auth" type="date" name="signupBirthdate" />
      <Field reducerName="auth" placeholder="Mot de passe" type="password" name="signupPassword" />
      <Field
        reducerName="auth"
        placeholder="Confirmation mot de passe"
        type="password"
        name="signupConfirmPassword"
      />
      <button>S'inscrire</button>
    </form>
  );
};

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
};

export default Signup;
