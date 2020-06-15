import React, { useEffect, useState, useRef } from 'react';
import RTCMultiConnection from 'rtcmulticonnection';

import rtcConfig from '../../../../util/rtc';
import styles from './ScreenShare.module.scss';

const Screen = () => {
  const videoStream = useRef(null);
  const [connection] = useState(new RTCMultiConnection());

  useEffect(() => {
    rtcConfig(connection, videoStream);
  }, []);

  const streamScreen = () => {
    connection.checkPresence('tavern', (isRoomExist, roomid) => {
      if (isRoomExist === true) {
        connection.join(roomid);
      } else {
        connection.open(roomid);
      }
      // history.push('/tavern');
    });
  };

  const join = () => {
    connection.join('tavern');
    // history.push('/tavern');
  };

  const stop = () => {
    // stop all local cameras
    connection.attachStreams.forEach((stream) => stream.stop());
    // Removes the video tag
    videoStream.current.querySelector('video').remove();
  };

  return (
    <div>
      <div className={styles.ScreenContainer} ref={videoStream}></div>
      <p>{connection.userid}</p>
      <button onClick={streamScreen}>Partager</button>
      <button onClick={join}>Rejoindre</button>
      <button onClick={stop}>Arrêter</button>
    </div>
  );
};

export default Screen;
