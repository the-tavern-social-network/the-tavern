import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


import Modal from '../../../../components/Modal/Modal';
import styles from './Invitation.module.scss';
import { useHistory } from 'react-router-dom';

import d20 from '../../../../assets/images/d20.svg'
import skull from '../../../../assets/images/skull.svg'

const Invitation = ({
  id,
  username,
  avatar,
  date,
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
      <div className={styles.Invitation__Tavern}>
        <div className={styles.Invitation__Tavern__Asking}>
          <div className={styles.Invitation__Tavern__Request}>
            <div className={styles.Invitation__Tavern__Container}>
              {date &&
              <Moment className={styles.Invitation__Tavern__Time} add={{ hours: 2 }} format="HH:mm">{date}</Moment>
              }
              <img className={styles.Invitation__Tavern__Avatar} src={avatar} alt="avatar" />
              <div>
                <p className={styles.Invitation__Tavern__Username}>{username} vous invite à jouer ...</p>
              </div>
            </div>
            <div className={styles.Invitation__Tavern__Buttons__Container}>
              <button className={styles.Invitation__Tavern__Button__Add} onClick={(event) => clickHandler('accept', id)}>
                <img src={d20} alt="icone accepter"/>
                Accepter
              </button>
              <button className={styles.Invitation__Tavern__Button__Decline} onClick={(event) => clickHandler('reject', id)}>
                <img src={skull} alt="icone skull"/>
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
