/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';

import ContactList from '../ContactList/ContactList';

import door from '../../../../../src/assets/images/door.svg';
import logo from '../../../../../src/assets/images/logo1.svg';
import rtcConfig from '../../../../util/rtc';
import styles from './ScreenShare.module.scss';
import d20 from '../../../../assets/images/d20.svg';
import addplayer from '../../../../assets/images/addplayer.svg';
const Screen = ({
  connection,
  history,
  match,
  resetChat,
  connectedContacts,
  inviteIntoTavern,
  deleteTavern,
}) => {
  const [contactListOpen, setContactListOpen] = useState(false);
  const videoStream = useRef(null);

  useEffect(() => {
    rtcConfig(connection, videoStream);
    connection.onMediaError = (error) => {
      deleteTavern(match.params.id);
      connection.closeSocket();
      history.push('/');
    };
  }, [connection]);

  const clickHandler = (event) => {
    connection.closeSocket();
    resetChat();
    history.replace('/');
  };

  return (
    <div className={styles.ScreenContainer} ref={videoStream}>
      <img className={styles.ScreenContainer__Logo} src={logo} alt="logo" />
      <div className={styles.ScreenContainer__Icons}>
        <img className={styles.ScreenContainer__Icons__D20} src={d20} alt="d20" />
        <img
          title="Liste des Contacts"
          className={styles.ScreenContainer__Icons__AddPlayer}
          onClick={() => setContactListOpen(!contactListOpen)}
          src={addplayer}
          alt="Add PLayer"
        />
        <img
          src={door}
          className={styles.ScreenContainer__Icons__Exit}
          alt="door"
          title="Quitter la tavern"
          onClick={clickHandler}
        />
        {contactListOpen ? (
          connectedContacts.find((contact) => contact.isGamemaster) ? (
            <ContactList
              connectedContacts={connectedContacts}
              connection={connection}
              match={match}
              inviteIntoTavern={inviteIntoTavern}
            />
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default Screen;
