import React from 'react';

const dummyMessages = [
  {
    id: 1,
    name: 'john smith',
    username: 'johnsmith',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    latestMessage: 'Hey, how are you?',
    timestamp: '10:30 AM',
    unread: 2,
  },
  {
    id: 2,
    name: 'alice johnson',
    username: 'alicejohnson',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    latestMessage: 'See you tomorrow!',
    timestamp: 'Yesterday',
    unread: 0,
  },
];

const MessageList = () => (
  <div className="bg-[#282b30] h-full flex flex-col">
    <div className="p-4 border-b border-gray-700">
      <h2 className="text-xl font-bold text-white">messages</h2>
    </div>
    <div className="flex-1 overflow-y-auto">
      {dummyMessages.map((message, index) => (
        <div key={message.id} className={`flex items-center p-3 cursor-pointer transition-colors hover:bg-[#40444b] ${index !== 0 ? 'border-t border-gray-700' : ''}`}>
          <img src={message.avatar} alt={message.name} className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-white">{message.name}</h3>
              <p className="text-xs text-gray-400">{message.timestamp}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400 truncate w-40">{message.latestMessage}</p>
              {message.unread > 0 && (
                <div className="bg-[#7289da] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                  {message.unread}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MessageList;