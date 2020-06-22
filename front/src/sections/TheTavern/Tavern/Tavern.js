/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import RTCMultiConnection from 'rtcmulticonnection';

import ScreenShare from './ScreenShare/ScreenShare';
import styles from './Tavern.module.scss';
import Chat from '../../../containers/TheTavern/Tavern/Chat';
import door from '../../../../src/assets/images/door.svg';

const Tavern = ({ history, user }) => {
  const [connection] = useState(new RTCMultiConnection());

  useEffect(() => {
    connection.checkPresence('tavern', (isRoomExist, roomid) => {
      if (isRoomExist === true) {
        connection.dontCaptureUserMedia = true;
        connection.join(roomid);
      } else {
        connection.open(roomid);
      }
    });

    return () => {
      // stop all local cameras
      connection.attachStreams.forEach((stream) => stream.stop());
    };
  }, []);

  const clickHandler = (event) => {
    history.push('/');
  };

  return (
    <div>
      <div>
        <span className={styles.Quit} onClick={clickHandler}>Quitter la tavern 
        <img className={styles.QuitImage} src={door} alt="door"></img>
        </span>
      </div>
      <ScreenShare user={user} connection={connection} />
      <Chat user={user} connection={connection} />
    </div>
  );
};

export default Tavern;
