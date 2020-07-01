import React, { useState } from 'react';
import PropTypes from 'prop-types';

import addplayer from '../../../../assets/images/addplayer.svg';
import styles from './ContactList.module.scss';


const ContactList = ({connection, inviteIntoTavern, match}) => {

  const [contactListOpen, setContactListOpen] = useState(false);

  
  return (
<>
    
    {contactListOpen ? 
      <div className={styles.AddPlayerContainer}>
        
        <div className={styles.AddPalyerContainer__ContactList}>
          <ul className={styles.ContactList__List}>
            {connection.extra.user.contacts.map((contact) => (
              <li className={styles.ContactList__List__Item} key={contact.id}>
                <img className={styles.ContactList__List__Item__Avatar} src={contact.avatar} alt={`Avatar de ${contact.username}`}/>
                <p className={styles.ContactList__List__Item__Content}>
                  {contact.username}
                </p>
                <button className={styles.ContactList__List__Item__Btn} onClick={() => inviteIntoTavern(+contact.id, match.params.id)}>
                  Inviter 
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      : ''
    }
</>
    
  );
};

ContactList.propTypes = {
  
};

export default ContactList;