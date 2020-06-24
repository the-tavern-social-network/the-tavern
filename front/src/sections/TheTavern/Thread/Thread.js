import React, { useState } from 'react';
import styles from './Thread.module.scss';

import Welcome from '../../../containers/components/Welcome';
import Posts from '../../../containers/TheTavern/Thread/Posts';
import PostForm from '../../../containers/TheTavern/Thread/PostForm';

const Thread = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Thread}>
      <Welcome cssClass={styles.Thread__Welcome} />
      <Posts />
      <PostForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Thread;
