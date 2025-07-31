import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MessageList from '../components/MessageList';
import ChatWindow from '../components/ChatWindow';
import InboxUserList from '../components/InboxUserList';

const user = {
  name: 'jane doe',
  username: 'janedoe',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
};

function Messages() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1e1f22] text-gray-300 flex">
      <Sidebar user={user} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} currentPage="messages" />
      
      <div className="flex-1 md:pl-20 lg:pl-64 flex h-screen">
        <div className="w-1/4 xl:w-1/5 border-r border-gray-700">
          <MessageList />
        </div>
        <div className="flex-1">
          <ChatWindow />
        </div>
        <div className="w-1/4 xl:w-1/5 border-l border-gray-700 hidden lg:block">
          <InboxUserList />
        </div>
      </div>
    </div>
  );
}

export default Messages;