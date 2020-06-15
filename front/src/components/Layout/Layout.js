import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ section, children }) => {
  let layout;

  switch (section) {
    case 'auth':
      layout = (
        <>
          <header>AUTH HEADER</header>
          <main>{children}</main>
          <footer>AUTH FOOTER</footer>
        </>
      );
      break;
    case 'admin':
      layout = <main>{children}</main>;
      break;
    default:
      layout = (
        <>
          <header>TAVERN HEADER</header>
          <main>{children}</main>
          <footer>TAVERN FOOTER</footer>
        </>
      );
      break;
  }

  return <>{layout}</>;
};

Layout.propTypes = {};

export default Layout;
