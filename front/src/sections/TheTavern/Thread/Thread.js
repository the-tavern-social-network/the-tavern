import React from 'react';
import styles from './Thread.module.scss';

import cross from '../../../assets/images/logocroix.svg';
import Posts from '../../../containers/TheTavern/Thread/Posts';
import PostForm from '../../../containers/TheTavern/Thread/PostForm';

const Thread = () => {
  return (
    <div className={styles.Thread}>
      
      <PostForm />
      <Posts />
      <div className={styles.Drawer}>
        <img className={styles.SelfAvatar} src={cross} alt=""/>
        <div className={styles.Triangle}></div>
      </div>
    </div>
  );
};

export default Thread;
