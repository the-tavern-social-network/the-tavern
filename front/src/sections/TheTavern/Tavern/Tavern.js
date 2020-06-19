/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import RTCMultiConnection from 'rtcmulticonnection';

import ScreenShare from './ScreenShare/ScreenShare';
import Chat from '../../../containers/TheTavern/Tavern/Chat';

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
      <ScreenShare user={user} connection={connection} />
      <Chat user={user} connection={connection} />
      <div>
        // TODO door image
        {/* <img src=""/> */}
        <button onClick={clickHandler}>Quitter la tavern</button>
      </div>
    </div>
  );
};

export default Tavern;
