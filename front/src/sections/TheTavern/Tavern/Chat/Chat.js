import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Field from '../../../../containers/components/Field';
import styles from './Chat.module.scss';
import { useEffect } from 'react';

const Chat = ({ connection, message, messages, addChatMessage, resetFields, user }) => {
  const messagesContainer = useRef(null)

  useEffect(() => {
    const container = messagesContainer.current;
    container.scrollTop = container.scrollHeight;

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
    <div className={styles.ChatContainer}>
     <form onSubmit={submitHandler}>
      <div ref={messagesContainer}>
        {messages.map((message) => (
          <div key={Math.random().toString()}>
            <p className={styles.ChatUser}>{message.user}</p>
            <p className={styles.MessageContainer} >{message.message}</p>
          </div>
        ))}
      </div>
      <div className={styles.FormContainer}>
        <Field className={styles.FormContainer__TextField} reducerName="chat" name="message" />
        <button className={styles.FormContainer__SendButton}>Envoyer</button>
      </div>
     </form>

    </div>
    
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
