import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../components/Modal/Modal';

import styles from './Invitation.module.scss';

const Invitation = ({ id, username, avatar, acceptContact, deleteContact }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const clickHandler = (type, id, event) => {
    if (type === 'accept') {
      acceptContact(id);
    } else if (type === 'reject') {
      setIsDeleteModalOpen(true);
    }
  };

  const deleteHandler = (id) => {
    setIsDeleteModalOpen(false);
    deleteContact(false, id);
  };

  return (
    <>
      <div className={styles.Invitation}>
        <img className={styles.Avatar} src={avatar} alt="" />
        <div className={styles.Asking}>
          <p className={styles.Name}>{username}</p>
          <div className={styles.Request}>
            <p className={styles.Message}>Demande de contact</p>
            <div className={styles.Buttons}>
              <button className={styles.Add} onClick={(event) => clickHandler('accept', id)}>
                Accepter
              </button>
              <button className={styles.Decline} onClick={(event) => clickHandler('reject', id)}>
                Refuser
              </button>
            </div>
          </div>
        </div>
      </div>
      {isDeleteModalOpen && (
        <Modal
          modalCancel={() => setIsDeleteModalOpen(false)}
          header="Suppression de demande de contact"
          message={`Voulez vous vraiment supprimer cette demande ?`}
          modalConfirm={() => deleteHandler(id)}
        />
      )}
    </>
  );
};

Invitation.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  acceptContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

Invitation.defaultProps = {
  avatar: '',
};

export default Invitation;
