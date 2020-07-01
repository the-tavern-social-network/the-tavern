import React from 'react';
import PropTypes from 'prop-types';

import styles from './ConnectedContactsList.module.scss';

const ConnectedContactsList = ({connectedContacts}) => {
  return (
    <div className={styles.ConnectedContactsList}>
      <ul className={styles.ConnectedContactsList__List}>
        {connectedContacts && connectedContacts.map((user) => ( user.isInitiator ? null :
          <li className={styles.ConnectedContactsList__List__Item} key={user.id}>
            <img title={user.username} className={styles.ConnectedContactsList__List__Avatar} src={user.avatar} alt={`Avatar de ${user.username}`}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

ConnectedContactsList.propTypes = {
  
};

export default ConnectedContactsList;