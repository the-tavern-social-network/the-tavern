import React from 'react';
//import PropTypes from 'prop-types';

// == Import
import Form from '../../components/Form';
import Messages from '../../components/Messages';


// import './style.scss';

// == Composant
const AppChat = ({ }) => {
  // après le rendu initial de l'AppChatlication, cad dès que l'AppChatli est prête je veux ouvrir le canal de discussion avec le serveur
  
  return (
    <div className="AppChat">
      <Messages />
      <Form />
    </div>
  );
};

// AppChat.propTypes = {
//   webSocketConnect: PropTypes.func.isRequired,
// };

// == Export
export default AppChat;
