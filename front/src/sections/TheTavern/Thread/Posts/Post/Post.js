import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import styles from './Post.module.scss';

const Post = ({ title, content, author, image, color, deletePost, loggedUser, id, createdAt }) => {
  return (
    <div className={styles.Post}>
      { author.username !== loggedUser && <button type="button" > Ajouter  </button> }
      { author.username === loggedUser ? <div className={styles.AuthorPost_gold}>{author.username}</div> : <div className={styles.AuthorPost}>{author.username}</div>}
      <p className={styles.ContentPost}>{content}</p>
      <div className={ author.username !== loggedUser ? styles.PostFooter_start : styles.PostFooter_between}>
        <div className={styles.DateContainer}>
          <div className={styles.Day}>
            <Moment add={{ hours: 2 }} format="DD/MM/YY">{createdAt}</Moment>
          </div>
          <div className={styles.Hour}>
            <Moment add={{ hours: 2 }} format="HH" >{createdAt}</Moment>
            <span>h</span>
            <Moment format="mm">{createdAt}</Moment>
          </div>
        </div>
          { author.username === loggedUser && <button className={styles.DeleteButton} type="button" onClick={() => deletePost(id)} > Supprimer  </button> }
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
