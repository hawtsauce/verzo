import React, { useState } from 'react';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Sidebar from '../components/Sidebar';
import Post from '../components/Post';

const dummyAccounts = [
  {
    id: 1,
    name: 'jane doe',
    username: 'janedoe',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    followers: 1234,
    isFollowing: false
  },
  {
    id: 2,
    name: 'john smith',
    username: 'johnsmith',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    followers: 567,
    isFollowing: true
  },
  {
    id: 3,
    name: 'alice johnson',
    username: 'alicejohnson',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    followers: 890,
    isFollowing: false
  },
  {
    id: 4,
    name: 'mike wilson',
    username: 'mikewilson',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    followers: 234,
    isFollowing: false
  }
];

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

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => (
  <div className="bg-[#282b30] rounded-lg p-4 sm:p-6">
    <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">search</h1>
    <form onSubmit={handleSearch} className="relative">
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="search posts and accounts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#40444b] rounded-lg pl-10 sm:pl-12 pr-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7289da] border-transparent focus:border-transparent"
        />
      </div>
    </form>
  </div>
);

const AccountResults = ({ accounts }) => (
  <div className="bg-[#282b30] rounded-lg p-4 sm:p-6">
    <h2 className="text-lg sm:text-xl font-bold text-white mb-4">accounts</h2>
    <div className="space-y-4">
      {accounts.map((account) => (
        <div key={account.id} className="flex items-center justify-between p-4 bg-[#40444b] rounded-lg hover:bg-[#52575e] transition-colors">
          <div className="flex items-center gap-4">
            <img
              src={account.avatar}
              alt={account.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-bold text-white">{account.name}</div>
              <div className="text-sm text-gray-400">@{account.username}</div>
              <div className="text-xs text-gray-500">{account.followers} followers</div>
            </div>
          </div>
          <a
            href="#"
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              account.isFollowing
                ? 'bg-[#40444b] text-gray-300 hover:bg-[#52575e]'
                : 'bg-[#5865f2] text-white hover:bg-[#4752c4]'
            }`}
          >
            {account.isFollowing ? 'following' : 'follow'}
          </a>
        </div>
      ))}
    </div>
  </div>
);

const PostResults = ({ posts }) => (
  <div className="bg-[#282b30] rounded-lg p-4 sm:p-6">
    <h2 className="text-lg sm:text-xl font-bold text-white mb-4">posts</h2>
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} user={post.user} />
      ))}
    </div>
  </div>
);

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const filteredAccounts = dummyAccounts.filter(account =>
    account.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    account.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPosts = dummyPosts.filter(post =>
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#1e1f22] text-gray-300">
      <Sidebar user={user} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} currentPage="search" />

      <div className="md:pl-20 lg:pl-64">
        <main className="flex-1 flex flex-col items-center relative min-h-screen">
          <div className="w-full max-w-6xl flex-1 pt-4 pb-10 space-y-6 overflow-y-auto px-4">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
            />

            {searchQuery ? (
              <div className="space-y-6">
                {filteredAccounts.length > 0 && <AccountResults accounts={filteredAccounts} />}
                {filteredPosts.length > 0 && <PostResults posts={filteredPosts} />}
                {filteredAccounts.length === 0 && filteredPosts.length === 0 && (
                  <div className="bg-[#282b30] rounded-lg p-6 text-center">
                    <UserCircleIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">no results found</h3>
                    <p className="text-gray-400">try searching for something else</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-[#282b30] rounded-lg p-6 text-center">
                <MagnifyingGlassIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">search for posts and accounts</h3>
                <p className="text-gray-400">enter a search term to get started</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Search;