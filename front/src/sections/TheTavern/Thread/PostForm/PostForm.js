import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../../../containers/components/Field';
import Invitation from '../Invitation/Invitation';
import Search from '../Search/Search';
import cross from '../../../../assets/images/logocroix.svg';
import styles from './PostForm.module.scss';

const PostForm = ({ post, resetFields, isOpen, setIsOpen }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    post();
    resetFields('post');
  };

  return (
    <div className={isOpen ? styles.Main__Open : styles.Main}>
      <div className={styles.Drawer} onClick={() => setIsOpen(!isOpen)}>
        <img className={styles.SelfAvatar} src={cross} alt="" />
        <span className={!isOpen ? styles.Triangle : styles.Triangle_down}></span>
      </div>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <Field
          cssClass={styles.Input}
          placeholder="Veuillez saisir un message..."
          type="textarea"
          reducerName="post"
          name="post"
        />
        <button className={styles.SendButton}>Envoyer</button>
      </form>
      <div className={styles.Gutter}></div>
      <div className={styles.Invitation}>
        <Invitation name="EdgeAbonnement" avatar={cross} />
        <Invitation name="LaServeuseAUXGROSSEINS" avatar={cross} />
        <Invitation name="TuVeuxEtreMonAMIE" avatar={cross} />
      </div>
      <Search />
    </div>
  );
};

PostForm.propTypes = {
  post: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
};

export default PostForm;
