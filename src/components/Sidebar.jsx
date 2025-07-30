import React from 'react';
import {
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  Cog6ToothIcon,
  PlusCircleIcon,
  HomeIcon,
  MapIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

const leftMenu = [
  { name: 'home', icon: HomeIcon, link: '/' },
  { name: 'profile', icon: UserCircleIcon, link: '/profile' },
  { name: 'messages', icon: ChatBubbleLeftRightIcon, link: '/messages' },
  { name: 'explore', icon: MapIcon, link: '/explore' },
  { name: 'followings', icon: UsersIcon, link: '/followings' },
  { name: 'settings', icon: Cog6ToothIcon, link: '/settings' },
  { name: 'github', icon: FaGithub, link: 'https://github.com/' },
];

function Sidebar({ user, isMenuOpen, setIsMenuOpen, onCreatePost, currentPage = 'home' }) {
  return (
    <>
      {/* Mobile Header */}
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
          {onCreatePost && (
            <button
              onClick={onCreatePost}
              className="p-2 rounded-lg bg-[#7289da] hover:bg-[#677bc4] transition-colors"
            >
              <PlusCircleIcon className="w-5 h-5 text-white" />
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed left-0 top-0 h-full w-64 bg-[#282b30] p-4 transform transition-transform flex flex-col">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end p-2 rounded-lg bg-[#40444b] hover:bg-[#52575e] mb-2 transition-colors"
              aria-label="Close menu"
            >
              <XMarkIcon className="w-6 h-6 text-gray-300" />
            </button>
            <div className="flex flex-col items-center p-4 bg-[#40444b] rounded-lg mb-4">
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full border-4 border-[#202225] mb-3" />
              <span className="font-bold text-lg text-white">{user.name}</span>
              <span className="text-sm text-gray-400">@{user.username}</span>
            </div>
            <nav className="flex flex-col gap-2">
              {leftMenu.map(({ name, icon: Icon, link }) => (
                <a
                  key={name}
                  href={link}
                  target={link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                    currentPage === name
                      ? 'bg-[#7289da] text-white font-semibold'
                      : 'hover:bg-[#3a3c41] text-gray-300 font-semibold'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${currentPage === name ? 'text-white' : 'text-gray-400'}`} /> {name}
                </a>
              ))}
              {onCreatePost && (
                <button
                  onClick={onCreatePost}
                  className="flex items-center gap-4 px-4 py-3 rounded-lg bg-[#7289da] text-white font-semibold transition-colors cursor-pointer mt-auto"
                >
                  <PlusCircleIcon className="w-6 h-6" /> create
                </button>
              )}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 p-4 gap-4 fixed left-4 top-4 h-[calc(100vh-2rem)] z-20">
        <div className="flex flex-col items-center p-4 bg-[#282b30] rounded-lg">
          <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full border-4 border-[#202225] mb-3" />
          <span className="font-bold text-xl text-white">{user.name}</span>
          <span className="text-sm text-gray-400">@{user.username}</span>
        </div>
        <nav className="flex flex-col gap-2 p-4 bg-[#282b30] rounded-lg flex-1">
          {leftMenu.map(({ name, icon: Icon, link }) => (
            <a
              key={name}
              href={link}
              target={link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                currentPage === name
                  ? 'bg-[#7289da] text-white font-semibold'
                  : 'hover:bg-[#3a3c41] text-gray-300 font-semibold'
              }`}
            >
              <Icon className={`w-6 h-6 ${currentPage === name ? 'text-white' : 'text-gray-400'}`} /> {name}
            </a>
          ))}
          {onCreatePost && (
            <a
              href="#"
              onClick={onCreatePost}
              className="flex items-center gap-4 px-4 py-3 rounded-lg bg-[#5865f2] text-white font-semibold transition-colors cursor-pointer mt-auto"
            >
              <PlusCircleIcon className="w-6 h-6" /> create
            </a>
          )}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar; 