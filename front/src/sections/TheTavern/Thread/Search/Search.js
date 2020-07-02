import React from 'react';
import styles from './Search.module.scss';

const Search = () => (
  <form className={styles.Form} onSubmit={(event) => event.preventDefault()}>
    <button className={styles.Button}>Rechercher</button>
    <input className={styles.Input} type="text" placeholder="Utilisateur" />
  </form>
);

export default Search;
