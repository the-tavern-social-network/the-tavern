import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Field from '../../../../containers/components/Field';
import styles from './Chat.module.scss';

const Chat = ({ connection, message, messages, addChatMessage, resetFields, user }) => {
  useEffect(() => {
    connection.onmessage = (event) => {
      event.extra.user = user;
      if (connection.isInitiator) {
        user.username = `${user.username} / GameMaster`
      }

      if (event.data.type === 'message') {
        addChatMessage({ message: event.data.message, user: event.data.user });
      } else if (event.data.type === 'diceRoll') {
        // ...
      }
    };
    // eslint-disable-next-line
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!message) {
      return;
    }

    addChatMessage({ message, user });
    connection.send({ type: 'message', message, user });
    // connection.send({ type: 'diceRoll', message });
    resetFields('chat');
  };

  return (
    <div className={styles.Chat}>
      <div className={styles.Chat__Messages}>
        <div className={styles.Chat__Messages__Message}>
          <p className={styles.Chat__Messages__Message__Player}>Le Tavernier</p>
          <p className={styles.Chat__Messages__Message__Content}>
            Bienvenue dans la Tavern ! Preparez vous à embarquer dans une aventure fantastique !
          </p>
        </div>
        {messages.map((message) => (
          <div key={message.user.id} className={styles.Chat__Messages__Message}>
            <p
              className={
                message.user.username === user.username
                  ? styles.Chat__Messages__Message__Self
                  : styles.Chat__Messages__Message__Player
              }>
              {message.user.username}
            </p>
            <p className={styles.Chat__Messages__Message__Content}>{message.message}</p>
          </div>
        ))}
      </div>
      <form className={styles.Chat__Message__Form} onSubmit={submitHandler}>
        <Field cssClass={styles.Chat__Message__Input} reducerName="chat" name="message" />
        <button className={styles.Chat__Message__Form__Btn}>Envoyer</button>
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
