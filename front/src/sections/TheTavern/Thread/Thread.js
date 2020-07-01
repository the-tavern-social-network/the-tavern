import React, { useState, useEffect } from 'react';

import Welcome from '../../../containers/components/Welcome';
import Posts from '../../../containers/TheTavern/Thread/Posts';
import PostForm from '../../../containers/TheTavern/Thread/PostForm';

import {websiteName}from '../../../util'

import styles from './Thread.module.scss';

const Thread = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title= `${websiteName} | Accueil`
  },[])

  return (
    <div className={styles.Thread}>
      <Welcome cssClass={styles.Thread__Welcome} />
      <div className={styles.Thread__PostsContainer}>
        <Posts />
        <PostForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Thread;
