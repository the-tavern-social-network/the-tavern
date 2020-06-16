import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../../containers/components/Field';

const Signin = (props) => {
  return (
    <form>
      <Field reducerName="auth" placeholder="Email" type="email" name="signinEmail" />
      <Field reducerName="auth" placeholder="Pseudo" name="signinUsername" />
      <Field reducerName="auth" type="date" name="signinBirthdate" />
      <Field reducerName="auth" placeholder="Mot de passe" type="password" name="signinPassword" />
      <Field
        reducerName="auth"
        placeholder="Confirmation mot de passe"
        type="password"
        name="signinConfirmPassword"
      />
    </form>
  );
};

Signin.propTypes = {};

export default Signin;
