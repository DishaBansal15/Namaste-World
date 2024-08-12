import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How are you?' },
    { id: 2, text: 'I am good, thanks! What about you?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: input }]);
      setInput('');
    }
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map(message => (
          <div key={message.id} className="message">
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
