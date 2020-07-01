/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import RTCMultiConnection from 'rtcmulticonnection';

import ScreenShare from './ScreenShare/ScreenShare';
import Chat from '../../../containers/TheTavern/Tavern/Chat';
import ContactList from './ContactList/ContactList';
import ConnectedContactsList from './ConnectedContactsList/ConnectedContactsList';

import { websiteName } from '../../../util';
import styles from './Tavern.module.scss';

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
  createTavern,
  deleteTavern,
}) => {
  const [connection] = useState(new RTCMultiConnection());
  const [userHasJoined, setUserHasJoined] = useState(false);

  useEffect(() => {
    document.title = `${websiteName} | Tavern`
  },[websiteName])

  useEffect(() => {
    setTavernId(match.params.id);
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
        createTavern(match.params.id);
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

    // Event triggered when the stream ends
    connection.onstreamended = (event) => {
      deleteTavern(match.params.id);
      if (event.userid === connection.userid) {
        // disconnect with all users
        connection.getAllParticipants().forEach((pid) => {
          connection.disconnectWith(pid);
        });
        // Closes the connection
        connection.closeSocket();
      }
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
      <ScreenShare
        resetChat={resetChat}
        match={match}
        history={history}
        user={user}
        connection={connection}
        deleteTavern={deleteTavern}
        inviteIntoTavern={inviteContact}
      />
        <div className={styles.Tavern__Chat__Container}>
        {userHasJoined && (
          <div className={styles.ContactListMoreSelf}>
              <div>
                <p>
                  <img title = {connection.extra.user.username}
                  className={styles.Tavern__Avatar} 
                  src={connection.extra.user.avatar}
                  alt={`Avatar de ${connection.extra.user.username}`}
                  /> 
                </p>
                <ContactList connection={connection} match={match} inviteIntoTavern={inviteContact} />
              </div>
              <ConnectedContactsList connectedContacts={connectedContacts}/>
            </div>
        )}
          <Chat user={user} tavernId={match.params.id} connection={connection} />
        </div>
    </div>
  );
};

export default Tavern;
