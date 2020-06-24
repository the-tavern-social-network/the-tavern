import React, { useState } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import Modal from '../../../../../components/Modal/Modal';

import cross from '../../../../../assets/images/logocroix.svg';
import styles from './Post.module.scss';

const Post = ({ content, author, deletePost, sendContactRequest, loggedUser, id, createdAt }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const deleteBtnClickHandler = () => {
    setIsDeleteModalOpen(true);
  };

  const deleteHandler = (id) => {
    deletePost(id);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Gutter}></div>
      <div className={styles.Post}>
        {author.username === loggedUser.username ? (
          <div className={styles.AuthorPost_gold}>{author.username}</div>
        ) : (
          <div className={styles.AuthorPost}>{author.username}</div>
        )}
        <div className={styles.AbsoluteAuthor}>
          <img className={styles.AuthorAvatar} src={cross} alt="" />
          {author.username !== loggedUser.username && (
            <div className={styles.AbsoluteAddContact}>
              <FontAwesomeIcon
                icon={faPlus}
                className={styles.AddButton}
                onClick={() => sendContactRequest(author.id)}
              />
            </div>
          )}
        </div>
        <pre className={styles.ContentPost}>{content}</pre>
        <div
          className={
            author.username !== loggedUser.username
              ? styles.PostFooter_start
              : styles.PostFooter_between
          }>
          <div className={styles.DateContainer}>
            <div className={styles.Day}>
              <Moment add={{ hours: 2 }} format="DD/MM/YY">
                {createdAt}
              </Moment>
            </div>
            <div className={styles.Hour}>
              <Moment add={{ hours: 2 }} format="HH">
                {createdAt}
              </Moment>
              <span>h</span>
              <Moment format="mm">{createdAt}</Moment>
            </div>
          </div>
          {author.username === loggedUser.username && (
            <FontAwesomeIcon
              color="red"
              icon={faTrash}
              className={styles.DeleteButton}
              onClick={deleteBtnClickHandler}
            />
          )}
        </div>
      </div>
      {isDeleteModalOpen && (
        <Modal
          modalCancel={() => setIsDeleteModalOpen(false)}
          header="Suppression de Post"
          message={`Voulez vous vraiment supprimer ce post ?`}
          modalConfirm={() => deleteHandler(id)}
        />
      )}
    </div>
  );
};

Post.propTypes = {
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
  color: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
  loggedUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

Post.defaultProps = {
  image: '',
  color: '#fff',
};

export default Post;
