import React from 'react';

const Message = ({ message, author }) => (
  <p className="message-item">
    <span className="author">{author}</span>: {message}
  </p>
);

export default Message;
