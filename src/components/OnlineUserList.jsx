import React from 'react';

const dummyOnlineUsers = [
  {
    id: 1,
    name: 'john smith',
    username: 'johnsmith',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'alice johnson',
    username: 'alicejohnson',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const OnlineUserList = () => (
  <div className="bg-[#282b30] h-screen p-4">
    <h2 className="text-xl font-bold text-white mb-4">online</h2>
    <div className="space-y-4">
      {dummyOnlineUsers.map((user) => (
        <div key={user.id} className="flex items-center">
          <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <h3 className="font-bold text-white">{user.name}</h3>
            <p className="text-sm text-gray-400">@{user.username}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default OnlineUserList;
