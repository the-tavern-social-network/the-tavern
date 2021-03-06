import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Field from '../../../containers/components/Field';
import AvatarsList from '../../../containers/TheTavern/UserAccount/AvatarsList/AvatarsList';
import Contact from './Contact/Contact';
import Modal from '../../../components/Modal/Modal';
import Titles from '../../../containers/TheTavern/UserAccount/Titles/Titles';

import styles from './UserAccount.module.scss';

import AvatarDefault from '../../../assets/images/Avatardefault.png';
import avatars from '../../../util/avatar';
import Feather from '../../../assets/images/feather.svg';
import Friends from '../../../assets/images/team.svg';

import { websiteName } from '../../../util';

const UserAccount = ({
  user,
  isEditing,
  setIsEditing,
  editUserAccount,
  deleteAcount,
  deleteContact,
}) => {
  const [isModalVisible, setModalIsVisible] = useState(false);
  const [isModalAvatar, setModalAvatar] = useState(false);
  const [isTitlesShowed, setIsTitlesShowed] = useState(false);

  useEffect(() => {
    document.title = `${websiteName} | Gestion de compte`;
  }, []);

  const clickHandler = (event) => {
    setModalIsVisible(true);
  };

  const handleEdit = (event) => {
    setIsEditing();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing();
    editUserAccount();
    // resetFields("user");
  };

  return (
    <section className={styles.UserAccount}>
      <div className={styles.Username_Container}>
        <button onClick={clickHandler} className={styles.UserAccount__DeleteBtn}>
          Supprimer Compte
        </button>
        <div>
          <h1 className={styles.Username}>{user.username}</h1>
          <div className={styles.TitleContainer}>
            <h2
              title="Changer de titre"
              className={styles.TitleContainer__Title}
              onClick={() => setIsTitlesShowed(true)}>
              {user.title} <span>▾</span>
            </h2>
            {isTitlesShowed && <Titles show={setIsTitlesShowed} />}
          </div>
          <img
            className={styles.UserAccount__Avatar}
            src={user.avatar === null ? AvatarDefault : user.avatar}
            alt="avatar de l'utilisateur"
            onClick={() => setModalAvatar(!isModalAvatar)}
            title="Modifier l'avatar"
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      {isEditing ? (
        <form className={styles.UserAccount__Description_Editing_Form} onSubmit={handleSubmit}>
          <Field
            cssClass={styles.UserAccount__Description_Editing}
            reducerName="user"
            name="description"
            type="textarea"
            placeholder="Veuillez saisir votre description..."
          />
          <button className={styles.UserAccount__Description_Editing_Btn}>Valider</button>
          <div className={styles.UserAccount__Description__Bloc}></div>
        </form>
      ) : (
        <div className={styles.UserAccount__Description}>
          <p className={styles.UserAccount__Description_Text}>{user.description}</p>
          <button className={styles.UserAccount__Description_Btn} onClick={handleEdit}>
            <img
              title="Modifier description"
              className={styles.UserAccount__Description_Btn__Feather}
              src={Feather}
              alt="plume"
            />
          </button>
          <div className={styles.UserAccount__Description__Bloc}></div>
        </div>
      )}

      <h2 className={styles.ContactList_Title}>
        <img className={styles.ContactList_Title_Logo} src={Friends} alt="friends" />
        Liste De Contacts
      </h2>
      <ul className={styles.ContactList}>
        {user.contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
        ))}
      </ul>
      <div className={styles.ContactList__Bloc}></div>
      {isModalVisible && (
        <Modal
          modalCancel={() => setModalIsVisible(false)}
          header="Suppression de Compte"
          message={`Voulez vous vraiment supprimer votre compte ?`}
          modalConfirm={() => deleteAcount(user.id)}
        />
      )}
      {isModalAvatar && (
        <AvatarsList modalCancel={() => setModalAvatar(false)} avatarImages={avatars} />
      )}
    </section>
  );
};

UserAccount.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    description: PropTypes.string.isRequired,
  }),
  isEditing: PropTypes.bool,
  setIsEditing: PropTypes.func.isRequired,
  editUserAccount: PropTypes.func.isRequired,
};

UserAccount.defaultProps = {
  isEditing: false,
};

export default UserAccount;
