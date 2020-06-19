import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from '../../../containers/components/Field';

import styles from './UserAccount.module.scss';
import darlyne from '../../../assets/images/darlyne.jpg';

const UserAccount = ({isEditing}) => {
  const [isModalVisible, setModalIsVisible] = useState(false)

  const clickHandler = event => {
    setModalIsVisible(true)
    // TODO show modal to delete account
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // resetFields("user");
  };

  return ( 
    <section className={styles.UserAccount}>
    <button 
    onClick={clickHandler} 
    className={styles.UserAccount__DeleteBtn}>
    Supprimer compte
    </button>
    <h1 
    // className={styles.Username}
    >
        {/* {user.username} */}
        MaximeEdgebgdu71
    </h1>
    <img 
    className={styles.UserAccount__Avatar} 
    src={darlyne}
    alt=""
    />
    {
      isEditing ?
    <form onSubmit={handleSubmit}>
      <Field 
      reducerName="user" 
      name="description"
      type="textarea" 
      placeholder="Veuillez saisir votre description..."  
      />
      <button>Valider</button>
        </form> :
        <div className={styles.UserAccount__Description}>
          <p>description</p>
          <button>Editer</button>
        </div>
    }
    <ul>
      <li>liste d'amis</li>
    </ul>
    </section>
  );
};

UserAccount.propTypes = {};

export default UserAccount;
