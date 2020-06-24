import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.scss';

const Modal = ({ header, message, modalConfirm, modalCancel }) => (
  <>
    <Backdrop clicked={modalCancel} />
    <div className={classes.Modal}>
      <header>{header}</header>
      <p>{message}</p>
      {modalConfirm && (
        <div className={classes.Buttons__Container}>
          <button onClick={modalCancel}>Annuler</button>
          <button onClick={modalConfirm}>Confirmer</button>
        </div>
      )}
    </div>
  </>
);

Modal.propTypes = {
  header: PropTypes.string,
  message: PropTypes.string.isRequired,
  modalConfirm: PropTypes.func.isRequired,
  modalCancel: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  header: '',
};

export default Modal;
