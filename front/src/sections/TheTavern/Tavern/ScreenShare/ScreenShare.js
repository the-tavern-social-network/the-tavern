import React, { useEffect, useRef } from 'react';

import rtcConfig from '../../../../util/rtc';
import styles from './ScreenShare.module.scss';

const Screen = ({ connection, user }) => {
  const videoStream = useRef(null);

  useEffect(() => {
    rtcConfig(connection, videoStream);
  }, [connection]);

  useEffect(() => {
    connection.checkPresence('tavern', (isRoomExist, roomid) => {
      if (isRoomExist === true) {
        connection.join(roomid);
      } else {
        connection.open(roomid);
      }
    });

    return () => {
      // stop all local cameras
      connection.attachStreams.forEach((stream) => stream.stop());
    };
  }, [connection]);

  return (
    <div>
      <div className={styles.ScreenContainer} ref={videoStream}></div>
      <p>{user.username}</p>
    </div>
  );
};

export default Screen;
