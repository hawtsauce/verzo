

import { useState } from 'react';
import {
  PhotoIcon,
  VideoCameraIcon,
  HandThumbUpIcon,
  ChatBubbleOvalLeftIcon,
  PlusCircleIcon,
  EllipsisHorizontalIcon,
  ArrowPathRoundedSquareIcon,
  FlagIcon,
  LinkIcon,
  MusicalNoteIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Sidebar from '../components/Sidebar';
import Post from '../components/Post';

const dummyPosts = [
  {
    id: 1,
    user: {
      name: 'jane doe',
      username: 'janedoe',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    image: 'https://picsum.photos/id/1015/600/400',
    content: 'enjoying the beautiful weather today! ☀️🌳 #sunny #nature',
    hashtags: ['#sunny', '#nature'],
    time: '2 hours ago',
    date: 'July 30, 2025',
  },
  {
    id: 2,
    user: {
      name: 'john smith',
      username: 'johnsmith',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    content: 'just finished a 5k run! 🏃‍♂️💨 #running #fitness',
    hashtags: ['#running', '#fitness'],
    time: '3 hours ago',
    date: 'July 30, 2025',
  },
  {
    id: 3,
    user: {
      name: 'alice johnson',
      username: 'alicejohnson',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    content: '#coffee break with friends',
    hashtags: ['#coffee'],
    time: '5 hours ago',
    date: 'July 30, 2025',
  },
];

const user = dummyPosts[0].user;

const rightOnline = [
  { name: 'emily', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', username: 'emily' },
  { name: 'mike', avatar: 'https://randomuser.me/api/portraits/men/41.jpg', username: 'mike' },
  { name: 'sara', avatar: 'https://randomuser.me/api/portraits/women/12.jpg', username: 'sara' },
];

const rightSuggestions = [
  { name: 'chris', avatar: 'https://randomuser.me/api/portraits/men/23.jpg' },
  { name: 'lily', avatar: 'https://randomuser.me/api/portraits/women/34.jpg' },
];

function Home() {
    const [openPostId, setOpenPostId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1e1f22] text-gray-300">
        {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-[#282b30] rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">create post</h2>
              <button onClick={() => setIsModalOpen(false)} className="bg-[#40444b] rounded-full p-2">
                <XMarkIcon className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="flex items-center gap-4 mb-4">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                <div>
                    <div className="font-bold text-white">{user.name}</div>
                    <div className="text-sm text-gray-400">@{user.username}</div>
                </div>
            </div>
            <textarea
              className="w-full bg-[#40444b] rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7289da] border-transparent focus:border-transparent"
              rows="4"
              placeholder={`what's on your mind, ${user.name}?`}
            ></textarea>
            <div className="flex gap-2 mt-4 border-t border-gray-700 pt-4 overflow-x-auto">
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer hover:bg-[#52575e] whitespace-nowrap">
                <PhotoIcon className="w-5 h-5 text-green-500" /> image
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer hover:bg-[#52575e] whitespace-nowrap">
                <VideoCameraIcon className="w-5 h-5 text-red-500" /> video
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer hover:bg-[#52575e] whitespace-nowrap">
                <MusicalNoteIcon className="w-5 h-5 text-blue-500" /> audio
              </a>
            </div>
            <div className="flex justify-end mt-4">
              <a href="#" className="px-6 py-2 rounded-lg bg-[#7289da] hover:bg-[#677bc4] text-white font-bold transition-all cursor-pointer">post</a>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Component */}
      <Sidebar 
        user={user} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onCreatePost={() => setIsModalOpen(true)}
        currentPage="home"
      />

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row">
        {/* Floating Right Sidebar */}
        <aside className="hidden lg:flex flex-col w-72 p-4 gap-4 fixed right-4 top-4 h-[calc(100vh-2rem)] z-20">
          <div className="p-4 bg-[#282b30] rounded-lg">
            <h2 className="text-lg font-bold text-white mb-4">online</h2>
            <div className="flex flex-col gap-4">
              {rightOnline.map(friend => (
                <div key={friend.name} className="flex items-center gap-3">
                  <span className="relative">
                    <img src={friend.avatar} alt={friend.name} className="w-10 h-10 rounded-full" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#282b30] rounded-full"></span>
                  </span>
                  <span className="font-semibold">{friend.name}</span>
                  <a href="#" className="ml-auto px-4 py-1.5 rounded-lg bg-[#40444b] hover:bg-[#52575e] text-white font-semibold text-sm transition-colors cursor-pointer">text</a>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-[#282b30] rounded-lg flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white">suggestions</h2>
            <a href="#" className="text-sm text-gray-400 hover:text-white">see all</a>
            </div>
            <div className="flex flex-col gap-4">
              {rightSuggestions.map(friend => (
                <div key={friend.name} className="flex items-center gap-3">
                  <img src={friend.avatar} alt={friend.name} className="w-10 h-10 rounded-full" />
                  <span className="font-semibold">{friend.name}</span>
                  <a href="#" className="ml-auto px-4 py-1.5 rounded-lg bg-[#40444b] hover:bg-[#52575e] text-white font-semibold text-sm transition-colors cursor-pointer">follow</a>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Desktop Main Feed */}
        <main className="flex-1 flex flex-col items-center relative min-h-screen pl-[17rem] pr-[19rem]">
          <div className="w-full max-w-4xl flex-1 pt-4 pb-10 space-y-6 overflow-y-auto">
          <div className="flex justify-center my-6">
                  <img src="/logo.png" alt="Verzo Logo" className="w-48" />
              </div>
          {/* Post Prompt */}
          <div className="bg-[#282b30] rounded-lg p-4 flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
                <input
                  type="text"
                  placeholder={`hey, ${user.name}! what's on your mind today?`}
                  className="flex-1 bg-[#40444b] rounded-lg px-6 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7289da] border-transparent focus:border-transparent cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                  readOnly
                />
                <a href="#" onClick={() => setIsModalOpen(true)} className="px-6 py-3 rounded-lg bg-[#7289da] hover:bg-[#677bc4] text-white font-bold transition-all cursor-pointer">post</a>
              </div>
              <div className="flex gap-4 ml-16 border-t border-gray-700 pt-3">
                <a href="#" onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer">
                  <PhotoIcon className="w-6 h-6 text-green-500" /> image
                </a>
                <a href="#" onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer">
                  <VideoCameraIcon className="w-6 h-6 text-red-500" /> video
                </a>
                <a href="#" onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer">
                  <MusicalNoteIcon className="w-6 h-6 text-blue-500" /> audio
                </a>
              </div>
            </div>
            {dummyPosts.map(post => (
              <Post key={post.id} post={post} user={post.user} />
            ))}
          </div>
        </main>
      </div>

      {/* Mobile Main Feed */}
      <main className="md:hidden flex-1 flex flex-col items-center relative min-h-screen">
        <div className="w-full max-w-2xl flex-1 pt-4 pb-20 space-y-4 px-4">
        {/* Post Prompt */}
        <div className="bg-[#282b30] rounded-lg p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
              <input
                type="text"
                placeholder={`hey, ${user.name}! what's on your mind today?`}
                className="flex-1 bg-[#40444b] rounded-lg px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7289da] border-transparent focus:border-transparent cursor-pointer text-sm"
                onClick={() => setIsModalOpen(true)}
                readOnly
              />
              <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 rounded-lg bg-[#7289da] hover:bg-[#677bc4] text-white font-bold transition-all cursor-pointer text-sm">
                post
              </button>
            </div>
            <div className="flex gap-2 ml-13 border-t border-gray-700 pt-3 overflow-x-auto">
              <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer whitespace-nowrap text-sm">
                <PhotoIcon className="w-5 h-5 text-green-500" /> image
              </button>
              <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer whitespace-nowrap text-sm">
                <VideoCameraIcon className="w-5 h-5 text-red-500" /> video
              </button>
              <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer whitespace-nowrap text-sm">
                <MusicalNoteIcon className="w-5 h-5 text-blue-500" /> audio
              </button>
            </div>
          </div>
          {dummyPosts.map(post => (
            <Post key={post.id} post={post} user={post.user} compact={true} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;

