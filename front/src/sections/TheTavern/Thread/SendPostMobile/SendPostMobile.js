import React from 'react';
import styles from './SendPostMobile.module.scss'
// import PropTypes from 'prop-types';

const SendPostMobile = () => (
  <div className={styles.Main}>
    <form className={styles.Form} action="">
        <input className={styles.Input} type="textarea"/>
        <button className={styles.SendButton} >Send</button>
    </form>
    <div className={styles.Gutter}></div>
  </div>
);

// SendPostMobile.propTypes = {
//  : ,
// };
export default SendPostMobile;
