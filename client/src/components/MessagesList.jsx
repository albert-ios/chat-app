import React from 'react';
import Message from './Message';

const MessagesList = ({ messages }) => (
  <section id="messages-list">
    <ul>
      {messages.map((msg) => (
        <Message key={msg.id} {...msg} />
      ))}
    </ul>
  </section>
);

export default MessagesList;
