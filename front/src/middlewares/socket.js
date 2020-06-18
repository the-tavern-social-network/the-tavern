// import { WS_CONNECT, SEND_MESSAGE, receiveMessage } from '../actions/webSocket';
// import axios from 'axios';

// // je prépare une let qui sera accessible dans tout se fichier qui contiendra mon canal
// let socketCanal;

// const socket = (store) => (next) => (action) => {
//   switch (action.type) {
//     case WS_CONNECT:
//       axios.get('http://localhost:3030/post')
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//       .catch(res => {
//         console.error(res);
//         console.log(res);
//       })

//       socketCanal = window.io('http://localhost:8080');


//       socketCanal.on('send_message', (message) => {
        
//         store.dispatch(receiveMessage(message));
//       });
    
//       break;
    
//     case SEND_MESSAGE: {

//       const state = store.getState();
      
//       if (!state.text) {
//         return
//       }

//       const post = {
//         title: state.pseudo,
//         content: state.text,
//       }

//       // console.log(postData);
//       axios.post('http://localhost:3030/post', post )
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//       .catch(res => {
//         console.error(res);
//         console.log(res);
//       })

//       socketCanal.emit('send_message', post );
//       break;
//     }
//     default:
      
//       next(action);
//   }
// };

// export default socket;