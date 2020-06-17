import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../../../containers/components/Field';

const PostForm = ({ post }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("j'ai envoyé un message que j'ai écrit dans mon formulaire post");
    post();
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
  //inputValue: PropTypes.string.isRequired,
  //changeText: PropTypes.func.isRequired,
};

export default PostForm;
