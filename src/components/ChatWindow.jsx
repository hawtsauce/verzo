import React from 'react';
import { PhoneIcon, VideoCameraIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid';

const ChatWindow = () => (
  <div className="bg-[#1e1f22] h-full flex flex-col">
    <header className="flex items-center justify-between p-4 border-b border-gray-700 bg-[#282b30]">
      <div className="flex items-center">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="john smith" className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h3 className="font-bold text-white text-lg">john smith</h3>
          <p className="text-sm text-green-400">online</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <PhoneIcon className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        <VideoCameraIcon className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        <EllipsisVerticalIcon className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
      </div>
    </header>
    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
      <div className="flex justify-end">
        <div className="bg-[#7289da] text-white p-3 rounded-lg max-w-md">
          <p>Hey, how are you?</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-[#40444b] text-white p-3 rounded-lg max-w-md">
          <p>I'm good, thanks for asking! Just working on the new project. How about you?</p>
        </div>
      </div>
       <div className="flex justify-end">
        <div className="bg-[#7289da] text-white p-3 rounded-lg max-w-md">
          <p>Same here, it's coming along nicely. Did you see the latest designs?</p>
        </div>
      </div>
       <div className="flex justify-start">
        <div className="bg-[#40444b] text-white p-3 rounded-lg max-w-md">
          <p>Yeah, they look great! Can't wait to implement them.</p>
        </div>
      </div>
    </div>
    <div className="p-4 bg-[#282b30]">
      <input
        type="text"
        placeholder="Type a message..."
        className="w-full bg-[#40444b] rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7289da] border-transparent focus:border-transparent"
      />
    </div>
  </div>
);

export default ChatWindow;