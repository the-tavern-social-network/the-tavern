import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../../../containers/components/Field';
import { useEffect } from 'react';

const Chat = ({ connection, message, messages, addChatMessage, resetFields, user }) => {
  useEffect(() => {
    connection.onmessage = (event) => {
      event.extra.user = user;
      addChatMessage({ message: event.data.message, user: event.data.user.username });
    };
    // eslint-disable-next-line
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!message) {
      return;
    }

    addChatMessage({ message, user: user.username });
    connection.send({ type: 'message', message, user });
    // connection.send({ type: 'diceRoll', message });
    resetFields('chat');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        {messages.map((message) => (
          <div key={Math.random().toString()}>
            <p>Joueur : {message.user}</p>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
      <Field reducerName="chat" name="message" />
      <button>Envoyer</button>
    </form>
  );
};

Chat.propTypes = {
  connection: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  addChatMessage: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
};

export default Chat;
