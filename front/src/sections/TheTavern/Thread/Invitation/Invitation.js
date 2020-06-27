import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../components/Modal/Modal';
import styles from './Invitation.module.scss';
import { useHistory } from 'react-router-dom';

const Invitation = ({
  id,
  username,
  avatar,
  contactRequest,
  tavernRequest,
  acceptContact,
  deleteContact,
  deleteTavern,
  tavernId,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const history = useHistory();

  let invitation;

  if (tavernRequest) {
    invitation =
      <div className={styles.InvitationTavern}>
        <div className={styles.AskingTavern}>
          <div className={styles.RequestTavern}>
            <div className={styles.InvitationTavern__ContainerTavern}>
              <img className={styles.AvatarTavern} src={avatar} alt="avatar" />
              <div>
                <p className={styles.NameTavern}>{username} vous invite à jouer ...</p>
              </div>
            </div>

            <div className={styles.ButtonsTavern}>
              <button className={styles.AddTavern} onClick={(event) => clickHandler('accept', id)}>
                Accepter
              </button>
              <button className={styles.DeclineTavern} onClick={(event) => clickHandler('reject', id)}>
                Refuser
              </button>
            </div>
          </div>
        </div>
      </div>
  } else if (contactRequest){
    invitation = <>
      <div className={styles.Invitation}>
        <div className={styles.Asking}>
          <div className={styles.Request}>
            <div className={styles.Invitation__Container}>
              <img className={styles.Avatar} src={avatar} alt="avatar" />
              <div>
                <p className={styles.Name}>{username}</p>
              </div>
            </div>

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
  }

  const clickHandler = (type, id) => {
    if (contactRequest) {
      if (type === 'accept') {
        acceptContact(id);
      } else if (type === 'reject') {
        setIsDeleteModalOpen(true);
      }
    } else if (tavernRequest) {
      if (type === 'accept') {
        history.push(`/tavern/${tavernId}`);
      }
      deleteTavern(tavernId);
    }
  };

  const deleteHandler = (id) => {
    setIsDeleteModalOpen(false);
    deleteContact(id);
  };

  return invitation;
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
