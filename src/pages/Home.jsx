

import { useState } from 'react';
import {
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  Cog6ToothIcon,
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
  XMarkIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

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

const leftMenu = [
  { name: 'profile', icon: UserCircleIcon },
  { name: 'messages', icon: ChatBubbleLeftRightIcon },
  { name: 'followings', icon: UsersIcon },
  { name: 'settings', icon: Cog6ToothIcon },
  { name: 'github', icon: FaGithub, link: 'https://github.com/' },
];

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

      {/* Mobile Header - Hidden on Desktop */}
      <header className="md:hidden sticky top-0 z-30 bg-[#282b30] border-b border-[#40444b] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-[#40444b] hover:bg-[#52575e] transition-colors"
          >
            <Bars3Icon className="w-6 h-6 text-gray-300" />
          </button>
          <img src="/logo.png" alt="Verzo Logo" className="h-8 w-auto" />
        </div>
        
        <div className="flex items-center gap-3">
          <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
          <button 
            onClick={() => setIsModalOpen(true)}
            className="p-2 rounded-lg bg-[#7289da] hover:bg-[#677bc4] transition-colors"
          >
            <PlusCircleIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown - Hidden on Desktop */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed left-0 top-0 h-full w-64 bg-[#282b30] p-4 transform transition-transform">
            <div className="flex flex-col items-center p-4 bg-[#40444b] rounded-lg mb-4">
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full border-4 border-[#202225] mb-3" />
              <span className="font-bold text-lg text-white">{user.name}</span>
              <span className="text-sm text-gray-400">@{user.username}</span>
            </div>
            <nav className="flex flex-col gap-2">
              {leftMenu.map(({ name, icon: Icon, link }) => (
                <a key={name} href={link || '#'} target={link ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-[#3a3c41] text-gray-300 font-semibold transition-colors cursor-pointer">
                  <Icon className="w-6 h-6 text-gray-400" /> {name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Layout - Hidden on Mobile */}
      <div className="hidden md:flex flex-row">
        {/* Floating Left Sidebar */}
        <aside className="flex flex-col w-64 p-4 gap-4 fixed left-4 top-4 h-[calc(100vh-2rem)] z-20">
          <div className="flex flex-col items-center p-4 bg-[#282b30] rounded-lg">
            <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full border-4 border-[#202225] mb-3" />
            <span className="font-bold text-xl text-white">{user.name}</span>
            <span className="text-sm text-gray-400">@{user.username}</span>
          </div>
          <nav className="flex flex-col gap-2 p-4 bg-[#282b30] rounded-lg flex-1">
            {leftMenu.map(({ name, icon: Icon, link }) => (
              <a key={name} href={link || '#'} target={link ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-[#3a3c41] text-gray-300 font-semibold transition-colors cursor-pointer">
                <Icon className="w-6 h-6 text-gray-400" /> {name}
              </a>
            ))}
              <a href="#" onClick={() => setIsModalOpen(true)} className="flex items-center gap-4 px-4 py-3 rounded-lg bg-[#5865f2] text-white font-semibold transition-colors cursor-pointer mt-auto">
                <PlusCircleIcon className="w-6 h-6" /> create
              </a>
          </nav>
        </aside>

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
        <main className="flex-1 flex flex-col items-center relative min-h-screen">
          <div className="w-full max-w-2xl flex-1 pt-4 pb-10 space-y-6 overflow-y-auto">
          <div className="flex justify-center my-6">
                  <img src="/logo.png" alt="logo" className="w-48" />
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
              <div
                key={post.id}
                className="bg-[#282b30] rounded-lg p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <a href="#" className="flex items-center gap-4">
                      <img
                      src={post.user.avatar}
                      alt={post.user.name}
                      className="w-14 h-14 rounded-full"
                      />
                      <div>
                      <div className="font-bold text-lg text-white">{post.user.name}</div>
                      <div className="text-sm text-gray-400">@{post.user.username}</div>
                      </div>
                  </a>
                  <div className="ml-auto text-xs text-gray-500">{post.date} &middot; {post.time}</div>
                </div>
                <div className="text-base leading-relaxed">
                  {post.content.split(' ').map((word, index) => 
                    word.startsWith('#') ? <a key={index} href="#" className="text-blue-400 hover:underline">{word}</a> : ` ${word} `
                  )}
                </div>
                {post.image && <div className="rounded-lg overflow-hidden mt-2">
                  <img
                    src={post.image}
                    alt="Post visual"
                    className="w-full h-auto object-cover"
                    draggable="false"
                  />
                </div>}
                <div className="flex gap-4 mt-4 border-t border-gray-700 pt-4">
                  <a href="#" className="flex items-center justify-center gap-2 flex-1 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer">
                    <HandThumbUpIcon className="w-6 h-6" /> like
                  </a>
                  <a href="#" className="flex items-center justify-center gap-2 flex-1 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer">
                    <ChatBubbleOvalLeftIcon className="w-6 h-6" /> comment
                  </a>
                  <a href="#" className="flex items-center justify-center gap-2 flex-1 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer">
                    <ArrowPathRoundedSquareIcon className="w-6 h-6" /> share
                  </a>
                  <div className="relative">
                    <button onClick={() => setOpenPostId(openPostId === post.id ? null : post.id)} className="flex items-center justify-center gap-2 flex-1 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer">
                      <EllipsisHorizontalIcon className="w-6 h-6" />
                    </button>
                    {openPostId === post.id && (
                      <div className="absolute bottom-full right-0 w-38 mb-2 flex flex-col gap-2 bg-[#40444b] p-2 rounded-lg">
                        <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#52575e] text-white font-semibold transition-colors cursor-pointer">
                          <LinkIcon className="w-5 h-5" /> Copy Link
                        </a>
                        <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#52575e] text-white font-semibold transition-colors cursor-pointer">
                          <FlagIcon className="w-5 h-5" /> Report
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Mobile Main Feed - Hidden on Desktop */}
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
            <div
              key={post.id}
              className="bg-[#282b30] rounded-lg p-4 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <a href="#" className="flex items-center gap-3">
                    <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="w-12 h-12 rounded-full"
                    />
                    <div>
                    <div className="font-bold text-white">{post.user.name}</div>
                    <div className="text-sm text-gray-400">@{post.user.username}</div>
                    </div>
                </a>
                <div className="ml-auto text-xs text-gray-500">{post.time}</div>
              </div>
              <div className="text-sm leading-relaxed">
                {post.content.split(' ').map((word, index) => 
                  word.startsWith('#') ? <a key={index} href="#" className="text-blue-400 hover:underline">{word}</a> : ` ${word} `
                )}
              </div>
              {post.image && <div className="rounded-lg overflow-hidden mt-2">
                <img
                  src={post.image}
                  alt="Post visual"
                  className="w-full h-auto object-cover"
                  draggable="false"
                />
              </div>}
              <div className="flex gap-2 mt-3 border-t border-gray-700 pt-3">
                <button className="flex items-center justify-center gap-2 flex-1 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer text-sm">
                  <HandThumbUpIcon className="w-5 h-5" /> like
                </button>
                <button className="flex items-center justify-center gap-2 flex-1 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer text-sm">
                  <ChatBubbleOvalLeftIcon className="w-5 h-5" /> comment
                </button>
                <button className="flex items-center justify-center gap-2 flex-1 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer text-sm">
                  <ArrowPathRoundedSquareIcon className="w-5 h-5" /> share
                </button>
                <div className="relative">
                  <button onClick={() => setOpenPostId(openPostId === post.id ? null : post.id)} className="flex items-center justify-center gap-2 flex-1 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors cursor-pointer text-sm">
                    <EllipsisHorizontalIcon className="w-5 h-5" />
                  </button>
                  {openPostId === post.id && (
                    <div className="absolute bottom-full right-0 mb-2 flex flex-col gap-1 bg-[#40444b] p-2 rounded-lg">
                      <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#52575e] text-white font-semibold transition-colors cursor-pointer text-sm">
                        <LinkIcon className="w-4 h-4" /> Copy Link
                      </a>
                      <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#52575e] text-white font-semibold transition-colors cursor-pointer text-sm">
                        <FlagIcon className="w-4 h-4" /> Report
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;

