import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/Post';

const Posts = ({ posts }) => (
  <section>{posts.map((post) => <Post key={post.id} {...post} />).reverse()}</section>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Posts;
