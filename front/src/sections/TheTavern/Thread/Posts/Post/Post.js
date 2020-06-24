import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import cross from '../../../../../assets/images/logocroix.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Post.module.scss';

const Post = ({ content, author, deletePost, addContact, loggedUser, id, createdAt }) => {
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
                onClick={() => addContact(author.id)}
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
              onClick={() => deletePost(id)}
            />
          )}
        </div>
      </div>
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
  loggedUser: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

Post.defaultProps = {
  image: '',
  color: '#fff',
};

export default Post;
