import React, { useEffect, useRef } from 'react';

import rtcConfig from '../../../../util/rtc';
import styles from './ScreenShare.module.scss';

const Screen = ({ connection, user }) => {
  const videoStream = useRef(null);

  useEffect(() => {
    rtcConfig(connection, videoStream);
  }, [connection]);

  return (
    <div>
      <div className={styles.ScreenContainer} ref={videoStream}></div>
    </div>
  );
};

export default Screen;
