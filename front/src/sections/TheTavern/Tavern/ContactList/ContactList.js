import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.scss';
import ContactListItem from './ContactListItem/ContactListItem';

const ContactList = ({ connection, inviteIntoTavern, match, connectedContacts }) => {
  const userContacts = connection.extra.user.contacts;

  return (
    <>
      <div className={styles.AddPlayerContainer}>
        <div className={styles.AddPalyerContainer__ContactList}>
          <ul className={styles.ContactList__List}>
            {userContacts.map((contact) => (
              <ContactListItem
                key={contact.id}
                contact={contact}
                inviteIntoTavern={inviteIntoTavern}
                match={match}
                connection={connection}
                connectedContacts={connectedContacts}
              />
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
  connectedContacts: PropTypes.array.isRequired,
};

export default ContactList;

/* <li className={styles.ContactList__List__Item} key={contact.id}>
                <img
                  className={styles.ContactList__List__Item__Avatar}
                  src={contact.avatar}
                  alt={`Avatar de ${contact.username}`}
                />
                <p className={styles.ContactList__List__Item__Content}>{contact.username}</p>
                {isInvitable && (
                  <button
                    className={styles.ContactList__List__Item__Btn}
                    onClick={() => inviteIntoTavern(+contact.id, match.params.id)}>
                    Inviter
                  </button>
                )}
              </li> */
