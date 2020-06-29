import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.scss';

const ContactList = ({connection, inviteIntoTavern, match}) => {
  return (
    <div className={styles.ContactList}>
      <p className={styles.ContactList__Title}>Mes contacts</p>
      <ul className={styles.ContactList__List}>
        {connection.extra.user.contacts.map((contact) => (
          <li className={styles.ContactList__List__Item} key={contact.id}>
            <p>{contact.username}</p>
            <button onClick={() => inviteIntoTavern(+contact.id, match.params.id)}>
              Inviter dans la tavern
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  
};

export default ContactList;