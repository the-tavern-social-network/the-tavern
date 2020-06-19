import React from 'react';
import PropTypes from 'prop-types';
import styles from './Post.module.scss';
import getDateWithCreatedAt from '../../../../../util/getDateWithCreatedAt'


const Post = ({ title, content, author, image, color, deletePost, loggedUser, id, createdAt }) => {
  console.log(getDateWithCreatedAt(createdAt));
  return (
    
    <div className={styles.Post}>
      { author.username === loggedUser ? <div className={styles.AuthorPost_gold}>{author.username}</div> : <div className={styles.AuthorPost}>{author.username}</div>}
      <p className={styles.ContentPost}>{content}</p>
      <div className={styles.PostFooter}>
          { author.username === loggedUser && <button type="button" onClick={() => deletePost(id)} > Supprimer  </button> }
          { author.username !== loggedUser && <button type="button" > Ajouter  </button> }

      </div>
    </div>
  );
}
  

Post.propTypes = {
  author:  PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
  color: PropTypes.string.isRequired,
  deletePost : PropTypes.func.isRequired,
  loggedUser : PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

Post.defaultProps = {
  image: '',
  color: '#fff',
};

export default Post;
