import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gutter.module.scss'

const Gutter = ({avatar, isOpen, setIsOpen}) => (

  <div className={ !isOpen ? styles.Drawer : styles.Drawer_open}>
    <img className={styles.SelfAvatar} src={avatar} alt=""/>
    <div onClick={() => setIsOpen(!isOpen)} className={ !isOpen ? styles.Triangle : styles.Triangle_down}></div>
  </div>
);

Gutter.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
};
export default Gutter;
