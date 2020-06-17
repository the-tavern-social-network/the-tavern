import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, content, image, color, deletePost, loggedUser, id  }) => {
  console.log(loggedUser)
  console.log(author)
  return (
    
    <div>
      <div>{author.username}</div>
      <p>{content}</p>
  { author.username === loggedUser && <button onClick={deletePost(id)}> Supprimmer  </button> }
    </div>
  );
}
  

Post.propTypes = {
  author:  PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
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
