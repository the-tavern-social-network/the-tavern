import React, { useState } from 'react';
import styles from './Thread.module.scss';

import cross from '../../../assets/images/logocroix.svg';
import Posts from '../../../containers/TheTavern/Thread/Posts';
import PostForm from '../../../containers/TheTavern/Thread/PostForm';

const Thread = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Thread}>
      <Posts />
      <PostForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Thread;
