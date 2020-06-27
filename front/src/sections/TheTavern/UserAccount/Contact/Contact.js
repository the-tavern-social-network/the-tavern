import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';

import Modal from '../../../../components/Modal/Modal';

const Contact = ({ contact, deleteContact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <li className={styles.Contact_Content_Container}>
        <img src={contact.avatar} alt={`avatar de ${contact.username}`} />
        <span className={styles.Contact_Content}>{contact.username}</span>
        <button onClick={() => setIsModalOpen(true)} className={styles.Contact_Btn}>
          Supprimer
        </button>
      </li>
      {isModalOpen && (
        <Modal
          modalConfirm={() => deleteContact(contact.id)}
          modalCancel={() => setIsModalOpen(false)}
          header="Suppression de contact"
          message={`Voulez vous vraiment supprimer ${contact.username} de votre liste?`}
        />
      )}
    </>
  );
};

Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
