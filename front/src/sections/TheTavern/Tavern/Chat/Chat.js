import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import Field from '../../../../containers/components/Field';
import styles from './Chat.module.scss';
import { v4 as uuidv4 } from 'uuid';
const Chat = ({ connection, message, messages, addChatMessage, resetFields, user }) => {
  const messagesContainer = useRef(null);

  useEffect(() => {
    const container = messagesContainer.current;
    container.scrollTop = container.scrollHeight;
  }, [messages]);

  useEffect(() => {
    connection.onmessage = (event) => {
      event.extra.user = user;

      if (event.data.type === 'message') {
        addChatMessage({ message: event.data.message, user: event.data.user });
      } else if (event.data.type === 'diceRoll') {
        addChatMessage({ message: event.data.message });
      }
    };
    // eslint-disable-next-line
  }, []);

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      if (!event.shiftKey) {
        addChatMessage({ message: message, user: checkInitiator(user) });
        connection.send({ type: 'message', message: message, user: checkInitiator(user) });
        resetFields('tavern');
      }
    }
  };

  const checkInitiator = (user) =>
    connection.isInitiator ? { ...user, username: `${user.username} / GameMaster` } : user;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!message) {
      return;
    }

    addChatMessage({ message, user: checkInitiator(user) });
    connection.send({ type: 'message', message, user: checkInitiator(user) });
    resetFields('tavern');
  };

  return (
    <div className={styles.Chat}>
      <div className={styles.Chat__Messages} ref={messagesContainer}>
        <div className={styles.Chat__Messages__Message}>
          <p className={styles.Chat__Messages__Message__Player}>Le Tavernier</p>
          <p className={styles.Chat__Messages__Message__Content}>
            Bienvenue dans la Tavern ! Preparez vous à embarquer dans une aventure fantastique !
          </p>
        </div>
        {messages.map((message) => (
          <div key={uuidv4()} className={styles.Chat__Messages__Message}>
            {message.user && (
              <p
                className={
                  message.user.isGamemaster &&
                  message.user.username === `${user.username} / GameMaster`
                    ? styles.Chat__Messages__Message__Gamemaster__Self
                    : message.user.isGamemaster
                    ? styles.Chat__Messages__Message__Gamemaster
                    : message.user.username === user.username
                    ? styles.Chat__Messages__Message__Self
                    : styles.Chat__Messages__Message__Player
                }>
                {message.user.username}
              </p>
            )}
            <pre
              className={
                message.user
                  ? styles.Chat__Messages__Message__Content
                  : styles.Chat__Messages__DiceRoll
              }>
              {message.message}
            </pre>
          </div>
        ))}
      </div>
      <form className={styles.Chat__Message__Form} onKeyUp={handleEnter} onSubmit={submitHandler}>
        <Field
          type="textarea"
          cssClass={styles.Chat__Message__Input}
          reducerName="tavern"
          name="message"
        />
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
