import React from 'react';
import PropTypes from 'prop-types';
import styles from './AvatarItem.module.scss';

const AvatarItem = ({ avatarImage, updateAvatar, avatar }) => {
  return (
    <div className={styles.avatarCase} onClick={() => updateAvatar(avatarImage)}>
      <input
        type="radio"
        value={avatarImage}
        checked={avatar === avatarImage}
        readOnly
        name="avatarRadio"
      />
      <img src={avatarImage} alt={avatarImage} />
    </div>
  );
};

AvatarItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  avatarImage: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};
export default AvatarItem;
