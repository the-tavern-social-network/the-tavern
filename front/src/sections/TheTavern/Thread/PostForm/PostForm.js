import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../../../containers/components/Field';

const PostForm = ({ post, resetFields }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    post();
    resetFields('post');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field
        type="textarea"
        reducerName="post"
        name="post"
        placeholder="Veuillez saisir un message..."
      />
      <button>envoyer</button>
    </form>
  );
};

PostForm.propTypes = {
  post: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
};

export default PostForm;
