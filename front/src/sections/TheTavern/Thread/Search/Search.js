import React from 'react';
import styles from './Search.module.scss'

const Search = () => (
  <form className={styles.Form}>
    <button className={styles.Button} >search</button>
    <input className={styles.Input} type="text"/>
  </form>
);

export default Search;
