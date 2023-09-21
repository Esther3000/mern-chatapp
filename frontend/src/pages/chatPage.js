import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const response = await axios.get('/api/chat');
      setChats(response.data); // Use response.data to set the chats state
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div> // Add a unique key for each chat
      ))}
    </div>
  );
};

export default ChatPage;
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