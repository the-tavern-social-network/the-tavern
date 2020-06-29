import React from 'react';
import PropTypes from 'prop-types';
import styles from './AvatarsList.module.scss';
import AvatarItem from './AvatarItem/AvatarItem';
import cross from '../../../../assets/images/boutoncroix.svg';
import Backdrop from '../../../../components/Backdrop/Backdrop'

const AvatarsList = ({ modalCancel, avatar, avatarImages, updateAvatar, updateImage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    updateImage(avatar);
    modalCancel();
  };

  return (

    <>
      <Backdrop clicked={modalCancel}/>
      <div className={styles.Modal}>
        <div className={styles.Header}>
          <p>Faites votre choix parmis les avatars ci dessous!</p>
        </div>
        <div className={styles.Modal__Closebtn} onClick={modalCancel}>
          <img src={cross} alt="Bouton Fermeture" />
        </div>
        <form className={styles.AvatarLists} onSubmit={handleSubmit}>
          <div className={styles.AvatarLists__Container} >
            {avatarImages.map((avatarImage) => (
              <AvatarItem
                key={avatarImage}
                avatarImage={avatarImage}
                avatar={avatar}
                updateAvatar={(avatar) => updateAvatar(avatar)}
                submit={handleSubmit}
              />
            ))}
          </div>
          <button className={styles.AvatarLists__Valider} >Valider</button>
        </form>
      </div>
    </>
  );
};

AvatarsList.propTypes = {
  updateAvatar: PropTypes.func.isRequired,
  modalCancel: PropTypes.func.isRequired,
  avatarImages: PropTypes.array.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default AvatarsList;
