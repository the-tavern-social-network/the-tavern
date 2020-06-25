import React from 'react';
import PropTypes from 'prop-types';
import styles from './AvatarsList.module.scss';
import AvatarItem from './AvatarItem/AvatarItem';
import cross from '../../../../assets/images/logocroix.svg';
// import Backdrop from '../../../../components/Backdrop/Backdrop'

const AvatarsList = ({ modalCancel, avatar, avatarImages, updateAvatar, updateImage}) =>  {
    const handleSubmit = (event) => {
        event.preventDefault();
        updateImage(avatar);
        modalCancel();
    }

    console.log(modalCancel);
    return (
    <div className={styles.Modal}>
        <div className={styles.Header}>
            <p>Faites votre choix parmis les avatars ci dessous!</p>
            <div onClick={modalCancel}>
               <img src={cross} alt=""/>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.AvatarLists}>
              {avatarImages.map((avatarImage) => <AvatarItem key={avatarImage} avatarImage={avatarImage} avatar={avatar} updateAvatar={(avatar) => updateAvatar(avatar) } />)}
            </div>
            <button>valider</button>
        </form>
    </div>
    );
}

AvatarsList.propTypes = {
 updateAvatar: PropTypes.func.isRequired,
 modalCancel: PropTypes.func.isRequired,
 avatarImages: PropTypes.array.isRequired,
 avatar: PropTypes.string.isRequired,
};
export default AvatarsList;
