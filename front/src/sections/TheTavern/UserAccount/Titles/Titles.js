import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Title from './Title/Title';

import styles from './Titles.module.scss';

const Titles = ({ show, defaultTitles, updateTitle }) => {
  const list = useRef(null);
  const listItems = defaultTitles.map((title) => (
    <Title key={title} show={show} selectTitle={() => clickHandler(title)} name={title} />
  ));

  const clickAway = (event) => {
    const keys = listItems.map((item) => item.key);
    if (!keys.includes(event.target.textContent) && event.target !== list.current) {
      show(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickAway);

    return () => document.removeEventListener('mousedown', clickAway);
  });

  const clickHandler = (name, event) => {
    updateTitle(name);
    show(false);
  };

  return (
    <ul ref={list} className={styles.TitleList}>
      {listItems}
    </ul>
  );
};

Titles.propTypes = {
  show: PropTypes.func.isRequired,
  defaultTitles: PropTypes.array.isRequired,
  updateTitle: PropTypes.func.isRequired,
};

export default Titles;
