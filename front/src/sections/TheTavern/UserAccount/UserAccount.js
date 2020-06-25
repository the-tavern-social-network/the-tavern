import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from '../../../containers/components/Field';

import styles from './UserAccount.module.scss';
import avatarDefault from '../../../assets/images/avatar/Avatardefault.png';
import Modal from '../../../components/Modal/Modal';
import avatars from '../../../util/avatar';
import AvatarsList from '../../../containers/TheTavern/UserAccount/AvatarsList/AvatarsList';

const UserAccount = ({ user, isEditing, setIsEditing, editUserAccount, deleteAcount }) => {
  console.log(user);
  const [isModalVisible, setModalIsVisible] = useState(false);
  const [isModalAvatar, setModalAvatar] = useState(false)
  console.log(avatars);
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

  // TODO show modal to delete account
  return (
    <section className={styles.UserAccount}>
      <button onClick={clickHandler} className={styles.UserAccount__DeleteBtn}>
        Supprimer Compte
      </button>
      <div className={styles.Username_Container}>
        <h1 className={styles.Username}>
          {user.username}
        </h1>
        <img className={styles.UserAccount__Avatar} src={user.avatar === null ? avatarDefault : user.avatar} alt="" />
        <button onClick={() => setModalAvatar(!isModalAvatar)} >Modifier Avatar</button>
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
        </form>
      ) : (
        <div className={styles.UserAccount__Description}>
          <p className={styles.UserAccount__Description_Text} >{user.description}</p>
          <button className={styles.UserAccount__Description_Btn} onClick={handleEdit}>Editer</button>
        </div>
      )}

        <h2 className={styles.ContactList_Title}>liste Contacts </h2>
      <ul className={styles.ContactList}>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>DavidLeFaible</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        {/* Ajout en dur de contacts */}
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>FabienneLapineDeCorseFabienneLapineDeCorse</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>ThomasEnSoiEtEnPrincipe</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>DavidLeFaible</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>MaxOverlordEdgeDu85</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>MaxOverlordEdgeDu85</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>MaxOverlordEdgeDu85</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>MaxOverlordEdgeDu85</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>MaxOverlordEdgeDu85</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>MaxOverlordEdgeDu85</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>MaxOverlordEdgeDu85</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>MaxOverlordEdgeDu85</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>MaxOverlordEdgeDu85</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>MaxOverlordEdgeDu85</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        <li className={styles.ContactList_Content_Container}>
          <span className={styles.ContactList_Content}>MaxOverlordEdgeDu85</span>
          <button className={styles.ContactList_Btn}>Suppr</button> 
        </li>
        
      </ul>
      {isModalVisible && (
        <Modal
          modalCancel={() => setModalIsVisible(false)}
          header="Suppression de Compte"
          message={`Voulez vous vraiment supprimer votre compte ?`}
          modalConfirm={() => deleteAcount(user.id)}
        />
      )}
      {isModalAvatar && (
        <AvatarsList
          modalCancel={() => setModalAvatar(false)}
          avatarImages={avatars}
        />
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
