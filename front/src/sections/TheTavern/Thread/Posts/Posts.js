import React from 'react';
import styles from './Posts.module.scss';
import PropTypes from 'prop-types';
import Post from './Post/Post';

const Posts = ({ posts, loggedUser, deletePost, addContact }) => {
  return (
    <section className={styles.Posts}>
      {posts
        .map((post) => (
          <Post
            loggedUser={loggedUser}
            deletePost={deletePost}
            addContact={addContact}
            key={post.id}
            {...post}
          />
        ))
        .reverse()}
    </section>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Posts;
