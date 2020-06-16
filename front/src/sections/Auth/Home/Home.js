import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <>
      <div>description</div>
      <Link to="/auth/connexion">Connexion</Link>
    </>
  );
};

Home.propTypes = {};

export default Home;
