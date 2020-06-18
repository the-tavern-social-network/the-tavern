import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, content, image, color }) => (
  <div>
    <div>{title}</div>
    <p>{content}</p>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

Post.defaultProps = {
  image: '',
  color: '#fff',
};

export default Post;
