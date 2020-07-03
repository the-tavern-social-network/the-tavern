/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';

import ContactList from '../ContactList/ContactList';
import DiceRoller from '../DiceRoller/DiceRoller';

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
  setDicesValue,
  setRolledDices,
  user,
  addChatMessage,
  clearConnectedContactsList,
}) => {
  const [contactListOpen, setContactListOpen] = useState(false);
  const [areDicesShown, setAreDicesShown] = useState(false);
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
    if (connection.extra.user.isGamemaster) {
      for (const contact of connection.extra.user.contacts) {
        contact.tavernRequests.forEach((tavernRequest) => {
          if (+tavernRequest.gamemaster_id === +connection.extra.user.id)
            deleteTavern(match.params.id, connection.extra.user, contact);
        });
      }
    }

    connection.closeSocket();
    resetChat();
    clearConnectedContactsList();
    history.replace('/');
  };

  return (
    <div className={styles.ScreenContainer} ref={videoStream}>
      <img className={styles.ScreenContainer__Logo} src={logo} alt="logo" />
      <div className={styles.ScreenContainer__Icons}>
        <img
          onClick={() => setAreDicesShown(!areDicesShown)}
          className={styles.ScreenContainer__Icons__D20}
          src={d20}
          alt="d20"
        />
        {areDicesShown && (
          <DiceRoller
            addChatMessage={addChatMessage}
            user={user}
            connection={connection}
            setDicesValue={setDicesValue}
            setRolledDices={setRolledDices}
          />
        )}

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
