import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import Modal from '../../../../components/Modal/Modal';
import styles from './Invitation.module.scss';
import { useHistory } from 'react-router-dom';

import d20 from '../../../../assets/images/d20.svg';
import skull from '../../../../assets/images/skull.svg';

const Invitation = ({
  date,
  user,
  contact,
  gamemaster,
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
    invitation = (
      <div className={styles.Invitation__Tavern}>
        <div className={styles.Invitation__Tavern__Container}>
          {date && (
            <Moment className={styles.Invitation__Tavern__Time} add={{ hours: 2 }} format="HH:mm">
              {date}
            </Moment>
          )}
          <img className={styles.Invitation__Tavern__Avatar} src={gamemaster.avatar} alt="avatar" />
          <p className={styles.Invitation__Tavern__Message__Container}>
            <span className={styles.Invitation__Tavern__Username}>{gamemaster.username}</span>
            <span className={styles.Invitation__Tavern__Message}>
              Vous invite à jouer dans la Tavern !
            </span>
          </p>
        </div>
        <div className={styles.Invitation__Tavern__Buttons__Container}>
          <button
            className={styles.Invitation__Tavern__Button__Add}
            onClick={(event) =>
              clickHandler('accept', { gamemasterId: gamemaster.id, participantId: user.id })
            }>
            <img src={d20} alt="icone accepter" />
            Accepter
          </button>
          <button
            className={styles.Invitation__Tavern__Button__Decline}
            onClick={(event) =>
              clickHandler('reject', { gamemasterId: gamemaster.id, participantId: user.id })
            }>
            <img src={skull} alt="icone skull" />
            Refuser
          </button>
        </div>
      </div>
    );
  } else if (contactRequest) {
    invitation = (
      <>
        <div className={styles.Invitation}>
          <div className={styles.Asking}>
            <div className={styles.Request}>
              <div className={styles.Invitation__Container}>
                <img className={styles.Avatar} src={contact.avatar} alt="avatar" />
                <div>
                  <p className={styles.Name}>{contact.username}</p>
                </div>
              </div>

              <div className={styles.Buttons}>
                <button
                  className={styles.Add}
                  onClick={(event) => clickHandler('accept', { contactId: contact.id })}>
                  Accepter
                </button>
                <button
                  className={styles.Decline}
                  onClick={(event) => clickHandler('reject', { contactId: contact.id })}>
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
            modalConfirm={() => deleteHandler(contact.id)}
          />
        )}
      </>
    );
  }

  const clickHandler = (type, obj) => {
    if (contactRequest) {
      if (type === 'accept') {
        acceptContact(obj.contactId);
      } else if (type === 'reject') {
        setIsDeleteModalOpen(true);
      }
    } else if (tavernRequest) {
      if (type === 'accept') {
        history.push(`/tavern/${tavernId}`);
      }
      deleteTavern(tavernId, +obj.gamemasterId, +obj.participantId);
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
