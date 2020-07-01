import React from 'react';
import PropTypes from 'prop-types';

import styles from './ConnectedContactsList.module.scss';

const ConnectedContactsList = ({ connectedContacts, user }) => {
  return (
    <div className={styles.ConnectedContactsList}>
      <ul className={styles.ConnectedContactsList__List}>
        {!user.isGamemaster && (
          <li className={styles.ConnectedContactsList__List__Item} key={user.id}>
            <img
              title={user.username}
              className={styles.ConnectedContactsList__List__Avatar}
              src={user.avatar}
              alt={`Avatar de ${user.username}`}
            />
          </li>
        )}

        {connectedContacts.map((contact) =>
          (contact.isGamemaster && contact.id === user.id) || contact.isGamemaster ? null : (
            <li className={styles.ConnectedContactsList__List__Item} key={contact.id}>
              <img
                title={contact.username}
                className={styles.ConnectedContactsList__List__Avatar}
                src={contact.avatar}
                alt={`Avatar de ${contact.username}`}
              />
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

ConnectedContactsList.propTypes = {};

export default ConnectedContactsList;
