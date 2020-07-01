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
  openTavern,
  deleteTavern,
}) => {
  const [connection] = useState(new RTCMultiConnection());
  const [userHasJoined, setUserHasJoined] = useState(false);

  useEffect(() => {
    document.title = `${websiteName} | Tavern`;
  }, [websiteName]);

  useEffect(() => {
    setTavernId(match.params.id);
  }, []);

  useEffect(() => {
    connection.checkPresence(match.params.id, (isRoomExist, roomid) => {
      if (isRoomExist === true) {
        connection.dontCaptureUserMedia = true;
        connection.extra.user = { ...user, isGamemaster: false };
        connection.join(roomid);
        setUserHasJoined(true);
      } else {
        connection.extra.user = { ...user, isGamemaster: true };
        connection.open(roomid);
        openTavern(connection.isInitiator);
        tavernContactConnect(connection.extra.user);
        setUserHasJoined(true);
      }
    });

    connection.onopen = (event) => {
      const userToConnect = event.extra.user;
      userToConnect.connectionUserId = event.userid;
      tavernContactConnect(userToConnect);
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

  return (
    <div className={styles.Tavern}>
      <ScreenShare
        resetChat={resetChat}
        match={match}
        history={history}
        user={user}
        connection={connection}
        connectedContacts={connectedContacts}
        deleteTavern={deleteTavern}
        inviteIntoTavern={inviteContact}
      />
      <div className={styles.Tavern__Chat__Container}>
        {userHasJoined && (
          <div className={styles.ContactListMoreSelf}>
            <div>
              <p>
                {connectedContacts.map((contact) =>
                  contact.isGamemaster ? (
                    <img
                      title={contact.username}
                      className={styles.Tavern__Avatar}
                      src={contact.avatar}
                      alt={`Avatar de ${contact.username}`}
                    />
                  ) : null,
                )}
              </p>
            </div>
            <ConnectedContactsList connectedContacts={connectedContacts} user={user} />
          </div>
        )}
        <Chat user={user} tavernId={match.params.id} connection={connection} />
      </div>
    </div>
  );
};

export default Tavern;
