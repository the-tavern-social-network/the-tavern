/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import RTCMultiConnection from 'rtcmulticonnection';

import ScreenShare from './ScreenShare/ScreenShare';
import styles from './Tavern.module.scss';
import Chat from '../../../containers/TheTavern/Tavern/Chat';


import door from '../../../../src/assets/images/door.svg';


const Tavern = ({ match, history, user, resetChat }) => {
  const [connection] = useState(new RTCMultiConnection());

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

  const clickHandler = (event) => {
    connection.closeSocket();
    resetChat();
    history.push('/');
  };

  return (

    /*<div className={styles.Tavern}>
      <ScreenShare history={history} user={user} connection={connection} />
      <Chat user={user} connection={connection} />
      <div>
        {/* <img src=""/> */}
        /*<span className={styles.Tavern__Exit} onClick={clickHandler}>
          Quitter la tavern (DOOR)*/

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