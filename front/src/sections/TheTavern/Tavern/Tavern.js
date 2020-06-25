/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import RTCMultiConnection from 'rtcmulticonnection';

import ScreenShare from './ScreenShare/ScreenShare';
import styles from './Tavern.module.scss';
import Chat from '../../../containers/TheTavern/Tavern/Chat';

const Tavern = ({ match, history, user, resetChat, setTavernId }) => {
  const [connection] = useState(new RTCMultiConnection());

  useEffect(() => {
    setTavernId();
  }, []);

  useEffect(() => {
    connection.checkPresence(match.params.id, (isRoomExist, roomid) => {
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

  return (
    <div className={styles.Tavern}>
      <ScreenShare resetChat={resetChat} history={history} user={user} connection={connection} />
      <Chat user={user} connection={connection} />
    </div>
  );
};

export default Tavern;
