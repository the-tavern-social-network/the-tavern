import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Field from '../../../containers/components/Field';

const Connection = (props) => {
  return (
    <form>
      <Field reducerName="auth" placeholder="Email" type="email" name="connectionEmail" />
      <Field
        reducerName="auth"
        placeholder="Mot de passe"
        type="password"
        name="connectionPassword"
      />
      <Link to="/auth/inscription">inscription</Link>
      <button>Connexion</button>
    </form>
  );
};

Connection.propTypes = {};

export default Connection;
