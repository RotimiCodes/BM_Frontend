import React, { useState } from 'react';
import Header from '../Header'; // Assuming correct import path
import Sidebar from '../Sidebar'; // Assuming correct import path

function Messages() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Instagram', text: 'Hello from Instagram!', timestamp: '10:00 AM' },
    { id: 2, sender: 'Twitter', text: 'Hi there! How are you?', timestamp: '10:05 AM' },
    // Add more sample messages as needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Implement filtering logic here
  };

  const filteredMessages = messages.filter(message =>
    message.sender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newId = messages.length + 1;
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newMsg = { id: newId, sender: 'You', text: newMessage, timestamp: currentTime };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 md:p-8">
          <div className="flex">
            <div className="w-1/4">
              {/* Search bar */}
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search messages..."
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none"
              />
              {/* Display filtered messages */}
              {filteredMessages.map(message => (
                <div key={message.id} className="py-2">
                  <div>{message.sender}</div>
                  <div>{message.text}</div>
                  <div>{message.timestamp}</div>
                </div>
              ))}
            </div>
            <div className="w-3/4 ml-4">
              {/* Chat and messages section */}
              <div className="h-full border border-gray-300 rounded-md p-4">
                {/* Sample received message */}
                <div className="bg-gray-100 rounded-md p-2 mb-2">
                  <div>Instagram</div>
                  <div>Hello!</div>
                </div>
                {/* Sample sent message */}
                <div className="bg-blue-200 rounded-md p-2 mb-2 ml-auto">
                  <div>You</div>
                  <div>Hi there!</div>
                </div>
                {/* Add more messages here */}
              </div>
              {/* Typing box */}
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Messages;
