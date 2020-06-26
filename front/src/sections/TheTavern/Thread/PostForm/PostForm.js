import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../../../containers/components/Field';
import Invitation from '../Invitation/Invitation';
import Search from '../Search/Search';
import avatarDefault from '../../../../assets/images/avatar/Avatardefault.png';
import styles from './PostForm.module.scss';

const PostForm = ({ post, resetFields, isOpen, setIsOpen, user, acceptContact, deleteContact }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    post();
    resetFields('post');
    setIsOpen(!isOpen);
  };

  return (
    <div className={!isOpen ? styles.PostForm : [styles.PostForm, styles.PostForm__Open].join(' ')}>
      <div className={styles.Drawer} onClick={() => setIsOpen(!isOpen)}>
        <img className={styles.SelfAvatar} src={user.id} alt="" />
        <span className={!isOpen ? styles.Triangle : styles.Triangle__Down}></span>
      </div>
      <div className={styles.PostForm__Main}>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <div>
            <Field
              cssClass={styles.Input}
              placeholder="Veuillez saisir un message..."
              type="textarea"
              reducerName="post"
              name="post"
            />
            <button className={styles.SendButton}>Envoyer</button>
            <img className={styles.SelfAvatarInput} src={user.avatar === null ? avatarDefault : user.avatar} alt=""/>
          </div>
          <div className={styles.Gutter}></div>
        </form>
        <div className={styles.PostForm__Invitation}>
          {user.pendingRequests.received.map((contact) => (
            <Invitation
              key={contact.id}
              {...contact}
              acceptContact={acceptContact}
              deleteContact={deleteContact}
            />
          ))}
        </div>
        <Search />
      </div>
      <footer className={styles.PostForm__Footer}>© thetavern | Tous droits réservés | 2020</footer>
    </div>
  );
};

PostForm.propTypes = {
  post: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
};

export default PostForm;
