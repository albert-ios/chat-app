import React, { useState } from 'react';

const AddMessage = ({ dispatch }) => {
  const [message, setMessage] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && message.trim() !== '') {
      dispatch(message);
      setMessage('');
    }
  };

  return (
    <section id="new-message">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Напишите сообщение..."
      />
    </section>
  );
};

export default AddMessage;
