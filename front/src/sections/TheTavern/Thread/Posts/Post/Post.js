import React, { useState } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import Modal from '../../../../../components/Modal/Modal';
import AvatarDefault from '../../../../../assets/images/Avatardefault.png';

import styles from './Post.module.scss';

const Post = ({ post, deletePost, sendContactRequest, loggedUser }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const deleteBtnClickHandler = () => {
    setIsDeleteModalOpen(true);
  };

  const deleteHandler = (id) => {
    deletePost(id);
  };

  const sentRequest =
    loggedUser.pendingRequests.sent.find((user) => user.id === post.author.id) && true;
  const receivedRequest =
    loggedUser.pendingRequests.received.find((user) => user.id === post.author.id) && true;

  const alreadyContacts = loggedUser.contacts.find((user) => user.id === post.author.id) && true;

  return (
    <div className={styles.Container}>
      <div className={styles.Gutter}></div>
      <div className={styles.Post}>
        {post.author.username === loggedUser.username ? (
          <div className={styles.AuthorPost_gold}>{post.author.username}</div>
        ) : (
          <div className={styles.AuthorPost}>{post.author.username}</div>
        )}
        <div className={styles.AbsoluteAuthor}>
          <img
            className={
              alreadyContacts ? 
                styles.AuthorAvatar__AlreadyContacts
                : sentRequest || receivedRequest 
                  ? styles.AuthorAvatar__PendingRequest 
                : styles.AuthorAvatar}
            src={post.author.avatar || AvatarDefault}
            alt=""
          />
          {post.author.username !== loggedUser.username &&
            !sentRequest &&
            !receivedRequest &&
            !alreadyContacts && (
              <div className={styles.AbsoluteAddContact}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={styles.AddButton}
                  onClick={() => sendContactRequest(post.author.id)}
                />
              </div>
            )}
        </div>
        <pre className={styles.ContentPost}>{post.content}</pre>
        <div
          className={
            post.author.username !== loggedUser.username
              ? styles.PostFooter_start
              : styles.PostFooter_between
          }>
          <div className={styles.DateContainer}>
            <div className={styles.Day}>
              <Moment add={{ hours: 2 }} format="DD/MM/YY">
                {post.createdAt}
              </Moment>
            </div>
            <div className={styles.Hour}>
              <Moment add={{ hours: 2 }} format="HH">
                {post.createdAt}
              </Moment>
              <span>h</span>
              <Moment format="mm">{post.createdAt}</Moment>
            </div>
          </div>
          {post.author.username === loggedUser.username && (
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
          modalConfirm={() => deleteHandler(post.id)}
        />
      )}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
    color: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }),
  deletePost: PropTypes.func.isRequired,
  loggedUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

Post.defaultProps = {
  image: '',
  color: '#fff',
};

export default Post;
