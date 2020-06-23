import React from 'react';
import PropTypes from 'prop-types';
import styles from './Invitation.module.scss';

const Invitation = ({ name, avatar }) => (
  <div className={styles.Invitation}>
    <img className={styles.Avatar} src={avatar} alt="" />
    <div className={styles.Asking}>
      <p className={styles.Name}>{name}</p>
      <div className={styles.Request}>
        <p className={styles.Message}>Add you as contact:</p>
        <div className={styles.Buttons}>
          <button className={styles.Add}>Add</button>
          <button className={styles.Decline}>Decline</button>
        </div>
      </div>
    </div>
  </div>
);

Invitation.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default Invitation;
