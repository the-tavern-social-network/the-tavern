import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.scss';

const ContactList = ({ connection, inviteIntoTavern, match }) => {
  return (
    <>
      <div className={styles.AddPlayerContainer}>
        <div className={styles.AddPalyerContainer__ContactList}>
          <ul className={styles.ContactList__List}>
            {connection.extra.user.contacts.map((contact) => (
              <li className={styles.ContactList__List__Item} key={contact.id}>
                <img
                  className={styles.ContactList__List__Item__Avatar}
                  src={contact.avatar}
                  alt={`Avatar de ${contact.username}`}
                />
                <p className={styles.ContactList__List__Item__Content}>{contact.username}</p>
                <button
                  className={styles.ContactList__List__Item__Btn}
                  onClick={() => inviteIntoTavern(+contact.id, match.params.id)}>
                  Inviter
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

ContactList.propTypes = {
  connection: PropTypes.object.isRequired,
  inviteIntoTavern: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default ContactList;
