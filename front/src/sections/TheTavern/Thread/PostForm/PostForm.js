import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../../../containers/components/Field';
import InvitationHeader from '../Invitation/InvitationHeader/InvitationHeader';
import Invitation from '../Invitation/Invitation';
import Search from '../Search/Search';

import Fire from '../../../../assets/images/fire.svg';
import cross from '../../../../assets/images/logocroix.svg';
import AvatarDefault from '../../../../assets/images/Avatardefault.png';

import styles from './PostForm.module.scss';

const PostForm = ({
  post,
  resetFields,
  isOpen,
  setIsOpen,
  user,
  acceptContact,
  deleteContact,
  deleteTavern,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    post();
    resetFields('post');
    setIsOpen(!isOpen);
  };

  return (
    <div className={!isOpen ? styles.PostForm : [styles.PostForm, styles.PostForm__Open].join(' ')}>
      <div className={styles.Drawer} onClick={() => setIsOpen(!isOpen)}>
        <img className={styles.SelfAvatar} src={user.avatar} alt="" />
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
              post
            />
            <button className={styles.SendButton}>
              <img className={styles.SendButton__Fire} src={Fire} alt="Bouclier" />
              Envoyer
            </button>
            <img className={styles.SelfAvatarInput} src={user.avatar || AvatarDefault} alt="" />
          </div>
          <div className={styles.Gutter}></div>
        </form>
        <div className={styles.PostForm__TavernInvitation}>
          <div className={styles.PostForm__TavernInvitation__Container}>
            {user.tavernRequests.length ? (
              user.tavernRequests.map(({ gamemaster, tavernId, date }) => (
                <Invitation
                  key={gamemaster.id}
                  {...gamemaster}
                  date={new Date(date)}
                  deleteTavern={deleteTavern}
                  tavernId={tavernId}
                  tavernRequest
                />
              ))
            ) : (
                <div className={styles.PostForm__TavernInvitation__None}>
                  <h2>Pas d'invitation pour la tavern</h2>
              </div>
            )}
          </div>
        </div>
        <InvitationHeader
          label="Demandes de contact"
          number={user.pendingRequests.received.length}
        />
        <div className={styles.PostForm__Invitation}>
          {user.pendingRequests.received.map((contact) => (
            <Invitation
              key={contact.id}
              {...contact}
              acceptContact={acceptContact}
              deleteContact={deleteContact}
              deleteTavern={deleteTavern}
              contactRequest
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
