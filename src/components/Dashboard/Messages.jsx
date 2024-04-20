import React, { useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

function Messages() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Instagram', text: 'Hello from Instagram!', timestamp: '10:00 AM' },
    { id: 2, sender: 'Twitter', text: 'Hi there! How are you?', timestamp: '10:05 AM' },
    // Add more sample messages as needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Implement filtering logic here
  };

  const filteredMessages = messages.filter(message =>
    message.sender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 md:p-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between mb-4">
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {/* Add filter dropdown or buttons here */}
            </div>
            <div className="space-y-4">
              {filteredMessages.map(message => (
                <div key={message.id} className="flex items-center">
                  <div className="rounded-lg p-4 bg-gray-200">
                    <p className="text-gray-800">{message.text}</p>
                    <p className="text-xs text-gray-500">{message.sender} · {message.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Messages;
