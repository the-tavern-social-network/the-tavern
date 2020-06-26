/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import RTCMultiConnection from 'rtcmulticonnection';

import ScreenShare from './ScreenShare/ScreenShare';
import styles from './Tavern.module.scss';
import Chat from '../../../containers/TheTavern/Tavern/Chat';

const Tavern = ({
  match,
  history,
  user,
  resetChat,
  setTavernId,
  connectedContacts,
  tavernContactConnect,
  tavernContactDisconnect,
  inviteContact,
}) => {
  const [connection] = useState(new RTCMultiConnection());
  const [userHasJoined, setUserHasJoined] = useState(false);

  useEffect(() => {
    setTavernId();
  }, []);

  useEffect(() => {
    connection.checkPresence(match.params.id, (isRoomExist, roomid) => {
      if (isRoomExist === true) {
        connection.dontCaptureUserMedia = true;
        connection.extra.user = user;
        connection.join(roomid);
        setUserHasJoined(true);
      } else {
        connection.extra.user = user;
        connection.open(roomid);
        setUserHasJoined(true);
      }
    });

    connection.onopen = (event) => {
      const user = event.extra.user;
      user.connectionUserId = event.userid;
      tavernContactConnect(user);
    };

    connection.onclose = (event) => {
      tavernContactDisconnect(event.userid);
    };

    return () => {
      // stop all local cameras
      connection.attachStreams.forEach((stream) => stream.stop());
    };
  }, []);

  const inviteIntoTavernHandler = (contactId, tavernId) => {
    inviteContact(contactId, tavernId);
  };

  return (
    <div className={styles.Tavern}>
      <ScreenShare resetChat={resetChat} history={history} user={user} connection={connection} />
      <Chat user={user} connection={connection} />
      {userHasJoined && (
        <div>
          <p>{connection.extra.user.username}</p>
          <p style={{ backgroundColor: '#ccc', color: '#000' }}>Mes contacts</p>
          <ul>
            {connection.extra.user.contacts.map((contact) => (
              <li key={contact.id}>
                <p>{contact.username}</p>
                <button onClick={() => inviteIntoTavernHandler(+contact.id, match.params.id)}>
                  Inviter dans la tavern
                </button>
              </li>
            ))}
          </ul>
          <p style={{ backgroundColor: '#ccc', color: '#000' }}>Contacts Présents dans la tavern</p>
          <ul>
            {connectedContacts.map((user) => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tavern;
