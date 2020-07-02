import React from 'react';
import PropTypes from 'prop-types';

import styles from '../ContactList.module.scss';

const ContactListItem = ({ contact, match, inviteIntoTavern, connectedContacts, connection }) => {
  const updatedContact = { ...contact, isInvitable: true };

  for (const connectedContact of connectedContacts) {
    if (+connectedContact.id === +contact.id) {
      updatedContact.isInvitable = false;
    }
  }

  const isInvited = updatedContact.tavernRequests.find(
    (tavernRequest) => +tavernRequest.gamemaster_id === +connection.extra.user.id,
  );

  const inviteHandler = (id) => {
    inviteIntoTavern(+id, match.params.id);
  };

  return (
    <li className={styles.ContactList__List__Item} key={updatedContact.id}>
      <img
        className={styles.ContactList__List__Item__Avatar}
        src={updatedContact.avatar}
        alt={`Avatar de ${updatedContact.username}`}
      />
      <p className={styles.ContactList__List__Item__Content}>{updatedContact.username}</p>
      {updatedContact.isInvitable && (
        <button
          disabled={isInvited}
          className={
            isInvited
              ? styles.ContactList__List__Item__Btn__Invited
              : styles.ContactList__List__Item__Btn
          }
          onClick={() => inviteHandler(+updatedContact.id)}>
          {isInvited ? 'Invité' : 'Inviter'}
        </button>
      )}
    </li>
  );
};

ContactListItem.propTypes = {};

export default ContactListItem;
