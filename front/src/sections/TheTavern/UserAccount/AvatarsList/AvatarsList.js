import React from 'react';
import PropTypes from 'prop-types';
import styles from './AvatarsList.module.scss';

const AvatarsList = ({modalConfirm, modalCancel, avatarImage}) => (
  <div className={styles.Modal}>
      <p>Faites votre choix parmis les avatars ci dessous!</p>
      <form>
          <input type="radio" avatarImage={avatarImage} />
        <button onClick={() => modalConfirm('test')} >valider</button>
      </form>
  </div>
);

AvatarsList.propTypes = {
 modalConfirm: PropTypes.func.isRequired,
 modalCancel: PropTypes.func.isRequired,
 avatarImage: PropTypes.string.isRequired,
};
export default AvatarsList;
