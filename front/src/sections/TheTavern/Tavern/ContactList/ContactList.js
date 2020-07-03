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
            {userContacts &&
              userContacts.map((contact) => (
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
