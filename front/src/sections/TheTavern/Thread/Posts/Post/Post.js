import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, content, author, image, color, deletePost, loggedUser, id }) => {
  return (
    <div>
      <div>{author.username}</div>
      <p>{content}</p>
      {author.username === loggedUser && (
        <button type="button" onClick={() => deletePost(id)}>
          {' '}
          Supprimer{' '}
        </button>
      )}
      {author.username !== loggedUser && <button type="button"> Ajouter </button>}
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
