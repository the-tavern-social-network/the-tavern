import React, { useState } from 'react';
import styles from './Thread.module.scss';

import cross from '../../../assets/images/logocroix.svg';
import Posts from '../../../containers/TheTavern/Thread/Posts';
import PostForm from '../../../containers/TheTavern/Thread/PostForm';
import SendPostMobile from './SendPostMobile/SendPostMobile'
import Invitation from './Invitation/Invitation';
import Search from './Search/Search'

const Thread = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Thread}>
      
      <PostForm />
      { !isOpen && <Posts /> }
     <div className={ !isOpen ? styles.Drawer : styles.Drawer_open}>
        <img className={styles.SelfAvatar} src={cross} alt=""/>
        <div onClick={() => setIsOpen(!isOpen)} className={ !isOpen ? styles.Triangle : styles.Triangle_down}></div>
      </div>
      { isOpen && <div>
                    <SendPostMobile /> 
                    <div className={styles.Invitation}>
                      <Invitation name='EdgeAbonnement' avatar={cross} />
                      <Invitation name='LaServeuse' avatar={cross} />
                      <Invitation name='TuVeuxEtreMonAMIE' avatar={cross} />
                    </div>
                    <Search />
                  </div>}
    </div>
  );
};


export default Thread;
