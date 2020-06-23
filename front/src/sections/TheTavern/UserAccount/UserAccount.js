import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from '../../../containers/components/Field';

import styles from './UserAccount.module.scss';
import darlyne from '../../../assets/images/darlyne.jpg';

const UserAccount = ({ user, isEditing, setIsEditing, editUserAccount }) => {
  const [, /* isModalVisible */ setModalIsVisible] = useState(false);

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
        Supprimer compte
      </button>
      <h1
      // className={styles.Username}
      >
        {user.username}
      </h1>
      <img className={styles.UserAccount__Avatar} src={darlyne} alt="" />
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <Field
            reducerName="user"
            name="description"
            type="textarea"
            placeholder="Veuillez saisir votre description..."
          />
          <button>Valider</button>
        </form>
      ) : (
        <div className={styles.UserAccount__Description}>
          <p>{user.description}</p>
          <button onClick={handleEdit}>Editer</button>
        </div>
      )}
      <ul>
        <li>liste d'amis</li>
      </ul>
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
