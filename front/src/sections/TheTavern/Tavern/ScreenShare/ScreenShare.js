/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';

import door from '../../../../../src/assets/images/door.svg';
import rtcConfig from '../../../../util/rtc';
import styles from './ScreenShare.module.scss';

const Screen = ({ connection, history, resetChat }) => {
  const videoStream = useRef(null);

  useEffect(() => {
    rtcConfig(connection, videoStream);
    connection.onMediaError = (error) => {
      connection.closeSocket();
      history.push('/');
    };
  }, [connection]);

  const clickHandler = (event) => {
    connection.closeSocket();
    resetChat();
    history.push('/');
  };

  return (
    <div className={styles.ScreenContainer} ref={videoStream}>
      <div className={styles.ScreenContainer__TavernExit} title="Quitter la tavern">
        <img src={door} alt="door" onClick={clickHandler} />
      </div>
    </div>
  );
};

export default Screen;
