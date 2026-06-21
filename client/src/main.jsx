import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import chat from './reducers';
import handleNewMessage from './sagas';
import setupSocket from './sockets';
import { addUser } from './actions';
import App from './App.jsx';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  chat,
  applyMiddleware(sagaMiddleware)
);

// Элементарная, но надежная псевдо-авторизация при входе
const username = prompt('Введите ваше имя для чата:', 'Студент') || 'Студент';

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

store.dispatch(addUser(username));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
