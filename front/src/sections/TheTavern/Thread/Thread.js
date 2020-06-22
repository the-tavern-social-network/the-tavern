import React from 'react';
import styles from './Thread.module.scss';

import Posts from '../../../containers/TheTavern/Thread/Posts';
import PostForm from '../../../containers/TheTavern/Thread/PostForm';

const Thread = () => {
  return (
    <div className={styles.Thread}>
      
      <PostForm />
      <Posts />
    </div>
  );
};

export default Thread;
