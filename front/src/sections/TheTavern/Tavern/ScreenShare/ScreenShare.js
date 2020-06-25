import React, { useEffect, useRef } from 'react';

import rtcConfig from '../../../../util/rtc';
import styles from './ScreenShare.module.scss';

const Screen = ({ connection, history }) => {
  const videoStream = useRef(null);

  useEffect(() => {
    rtcConfig(connection, videoStream);
    connection.onMediaError = (error) => {
      connection.closeSocket();
      history.push('/');
    };
  }, [connection]);



  return (
    <div>
      <div className={styles.ScreenContainer} ref={videoStream}></div>
    </div>
  );

};

export default Screen;
