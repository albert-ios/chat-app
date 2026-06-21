import { WebSocketServer } from 'ws';

const port = process.env.PORT || 8989;
const wss = new WebSocketServer({ port });

let users = [];

const broadcast = (data, exceptWs) => {
  wss.clients.forEach((client) => {
    if (client.readyState === 1 && client !== exceptWs) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on('connection', (ws) => {
  let currentUser = null;

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      switch (data.type) {
        case 'ADD_USER': {
          currentUser = { name: data.name, id: Date.now().toString() };
          users.push(currentUser);
          ws.send(JSON.stringify({ type: 'USERS_LIST', users }));
          broadcast({ type: 'USERS_LIST', users }, ws);
          break;
        }
        case 'ADD_MESSAGE': {
          broadcast({
            type: 'ADD_MESSAGE',
            message: data.message,
            author: data.author,
            id: Date.now()
          }, ws);
          break;
        }
        default:
          break;
      }
    } catch (err) {
      console.error('Ошибка обработки JSON пакета:', err);
    }
  });

  ws.on('close', () => {
    if (currentUser) {
      users = users.filter(u => u.id !== currentUser.id);
      broadcast({ type: 'USERS_LIST', users }, ws);
    }
  });
});

console.log(`WebSocket-сервер успешно запущен на порту ${port}`);
