export default (connection, videoStreamContainer) => {
  // Socket URL
  connection.socketURL = 'http://localhost:8080/';
  connection.videosContainer = videoStreamContainer;

  connection.socketMessageEvent = 'screen-sharing';

  connection.session = {
    screen: true,
    audio: true,
    data: true,
  };

  connection.language = 'fr';

  connection.maxParticipantsAllowed = 8;

  connection.iceServers = [
    {
      urls: [
        'stun:stun.l.google.com:19302',
        'stun:stun1.l.google.com:19302',
        'stun:stun2.l.google.com:19302',
        'stun:stun.l.google.com:19302?transport=udp',
      ],
    },
  ];

  // Default room
  connection.channel = 'tavern';

  // Audio capture
  // if (navigator.getUserMedia) {
  //   connection.captureUserMedia(() => {}, {
  //     audio: true,
  //   });
  // }

  // Set this line to close room as soon as owner leaves
  connection.autoCloseEntireSession = false;

  // Event triggered when the stream starts
  connection.onstream = (event) => {
    if (connection.isInitiator && event.type === 'remote') {
      event.stream.mute();
    }

    if (event.mediaElement.nodeName === 'VIDEO') {
      event.mediaElement.style.width = '100%';
      event.mediaElement.style.height = '100%';
      videoStreamContainer.current.append(event.mediaElement);
    }
  };

  
};
