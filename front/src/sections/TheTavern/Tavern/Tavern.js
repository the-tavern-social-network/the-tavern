import React, { useState } from 'react';
import RTCMultiConnection from 'rtcmulticonnection';

import ScreenShare from './ScreenShare/ScreenShare';
import Chat from '../../../containers/TheTavern/Tavern/Chat';

const Tavern = () => {
  const [connection] = useState(new RTCMultiConnection());

  return (
    <div>
      <ScreenShare connection={connection} />
      <Chat connection={connection} />
    </div>
  );
};

export default Tavern;
