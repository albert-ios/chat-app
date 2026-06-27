import * as types from '../constants/ActionTypes';
import { messageReceived, populateUsersList } from '../actions';

const setupSocket = (dispatch, username) => {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  // ТВОЙ РЕАЛЬНЫЙ АДРЕС ИЗ СКРИНШОТА:
  const wsUrl = isLocal ? 'ws://localhost:8989' : 'wss://chat-app-cxv8.onrender.com';
  
  let socket;

  const connect = () => {
    socket = new WebSocket(wsUrl);

    socket.onopen = () => {
      socket.send(JSON.stringify({
        type: types.ADD_USER,
        name: username
      }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case types.ADD_MESSAGE:
          dispatch(messageReceived(data.message, data.author, data.id));
          break;
        case types.USERS_LIST:
          dispatch(populateUsersList(data.users));
          break;
        default:
          break;
      }
    };

    // Если сервер спит и сбросил соединение - пробуем снова через 3 секунды
    socket.onclose = () => {
      setTimeout(connect, 3000);
    };
  };

  connect();

  return socket;
};

export default setupSocket;
