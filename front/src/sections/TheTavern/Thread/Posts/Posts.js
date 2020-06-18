import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/Post';

const Posts = ({ posts, loggedUser, deletePost}) => (
  <section>{posts.map((post) => <Post loggedUser={loggedUser} deletePost={deletePost} key={post.id} {...post} />).reverse()}</section>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Posts;
