import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../../../containers/components/Field';
import { useEffect } from 'react';

const Chat = ({ connection, message, messages, addChatMessage, resetFields }) => {
  useEffect(() => {
    connection.onmessage = (event) => {
      addChatMessage({ message: event.data.message, user: event.userid });
    };
    // eslint-disable-next-line
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!message) {
      return;
    }

    addChatMessage({ message, user: connection.userid });
    connection.send({ type: 'message', message });
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
