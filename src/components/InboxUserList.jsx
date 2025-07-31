import React from 'react';

const dummyUsers = [
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
  {
    id: 3,
    name: 'mike wilson',
    username: 'mikewilson',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 4,
    name: 'sarah brown',
    username: 'sarahbrown',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
];

const InboxUserList = () => (
  <div className="bg-[#282b30] h-full flex flex-col">
    <div className="p-4 border-b border-gray-700">
      <h2 className="text-xl font-bold text-white">inbox</h2>
    </div>
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-2 p-4">
        {dummyUsers.map((user) => (
          <div key={user.id} className="flex items-center p-3 rounded-lg hover:bg-[#40444b] cursor-pointer transition-colors">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
            <div className="flex-1">
              <h3 className="font-bold text-white">{user.name}</h3>
              <p className="text-sm text-gray-400">@{user.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default InboxUserList;
