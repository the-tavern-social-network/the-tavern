/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';

import door from '../../../../../src/assets/images/door.svg';
import logo from '../../../../../src/assets/images/logo1.svg';
import rtcConfig from '../../../../util/rtc';
import styles from './ScreenShare.module.scss';
import d20 from '../../../../assets/images/d20.svg';

const Screen = ({ connection, history, match, resetChat, deleteTavern }) => {
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
    deleteTavern(match.params.id);
    resetChat();
    history.replace('/');
  };

  return (
    <div className={styles.ScreenContainer} ref={videoStream}>
      <img className={styles.ScreenContainer__Logo} src={logo} alt="logo" />
      <img className={styles.ScreenContainer__D20} src={d20} alt="d20" />
      <div className={styles.ScreenContainer__TavernExit} title="Quitter la tavern">
        <img src={door} alt="door" onClick={clickHandler} />
      </div>
    </div>
  );
};

export default Screen;
