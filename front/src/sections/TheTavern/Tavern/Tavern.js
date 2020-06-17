import React, { useState } from 'react';
import RTCMultiConnection from 'rtcmulticonnection';

import ScreenShare from './ScreenShare/ScreenShare';
import Chat from '../../../containers/TheTavern/Tavern/Chat';

const Tavern = ({ user }) => {
  const [connection] = useState(new RTCMultiConnection());

  return (
    <div>
      <ScreenShare user={user} connection={connection} />
      <Chat user={user} connection={connection} />
    </div>
  );
};

export default Tavern;
