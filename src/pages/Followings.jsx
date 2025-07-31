import { useState } from 'react';
import {
  UserCircleIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Sidebar from '../components/Sidebar';

const dummyFollowings = [
  {
    id: 1,
    name: 'jane doe',
    username: 'janedoe',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    followers: 1234,
    following: 567,
    mutualFriends: 8,
    isFollowing: true,
    isFollowingBack: true
  },
  {
    id: 2,
    name: 'john smith',
    username: 'johnsmith',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    followers: 567,
    following: 234,
    mutualFriends: 3,
    isFollowing: true,
    isFollowingBack: false
  },
  {
    id: 3,
    name: 'alice johnson',
    username: 'alicejohnson',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    followers: 890,
    following: 445,
    mutualFriends: 12,
    isFollowing: true,
    isFollowingBack: true
  },
  {
    id: 4,
    name: 'mike wilson',
    username: 'mikewilson',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    followers: 234,
    following: 123,
    mutualFriends: 5,
    isFollowing: true,
    isFollowingBack: false
  },
  {
    id: 5,
    name: 'sarah brown',
    username: 'sarahbrown',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    followers: 456,
    following: 289,
    mutualFriends: 9,
    isFollowing: true,
    isFollowingBack: true
  }
];

const dummyFollowers = [
  {
    id: 1,
    name: 'emily davis',
    username: 'emilydavis',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    followers: 789,
    following: 432,
    mutualFriends: 6,
    isFollowing: false,
    isFollowingBack: true
  },
  {
    id: 2,
    name: 'chris martinez',
    username: 'chrismartinez',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    followers: 321,
    following: 156,
    mutualFriends: 4,
    isFollowing: false,
    isFollowingBack: true
  },
  {
    id: 3,
    name: 'lisa garcia',
    username: 'lisagarcia',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    followers: 654,
    following: 378,
    mutualFriends: 11,
    isFollowing: false,
    isFollowingBack: true
  },
  {
    id: 4,
    name: 'david lee',
    username: 'davidlee',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    followers: 987,
    following: 543,
    mutualFriends: 2,
    isFollowing: false,
    isFollowingBack: false
  }
];

const user = {
  name: 'jane doe',
  username: 'janedoe',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
};

function Followings() {
  const [activeTab, setActiveTab] = useState('followings');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching:', searchQuery);
  };

  const filteredFollowings = dummyFollowings.filter(following =>
    following.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    following.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFollowers = dummyFollowers.filter(follower =>
    follower.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    follower.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFollowToggle = (userId, currentStatus) => {
    console.log(`${currentStatus ? 'Unfollowing' : 'Following'} user ${userId}`);
  };

  return (
    <div className="min-h-screen bg-[#1e1f22] text-gray-300">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-[#282b30] rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">create post</h2>
              <a href="#" onClick={() => setIsModalOpen(false)} className="bg-[#40444b] rounded-full p-2">
                <XMarkIcon className="w-5 h-5 text-gray-400" />
              </a>
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
            <div className="flex justify-end mt-4">
              <a href="#" className="px-6 py-2 rounded-lg bg-[#7289da] hover:bg-[#677bc4] text-white font-bold transition-all cursor-pointer">post</a>
            </div>
          </div>
        </div>
      )}

      <Sidebar 
        user={user} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        currentPage="followings"
      />

      <div className="md:pl-20 lg:pl-64">
        <main className="flex-1 flex flex-col items-center relative min-h-screen">
          <div className="w-full max-w-6xl flex-1 pt-4 pb-10 space-y-6 overflow-y-auto px-4">
            <div className="bg-[#282b30] rounded-lg p-4 sm:p-6">
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">followings & followers</h1>
              
              <form onSubmit={handleSearch} className="relative mb-4">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#40444b] rounded-lg pl-10 sm:pl-12 pr-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7289da] border-transparent focus:border-transparent"
                  />
                </div>
              </form>

              <div className="flex gap-2">
                <a
                  href="#"
                  onClick={() => setActiveTab('followings')}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                    activeTab === 'followings'
                      ? 'bg-[#7289da] text-white'
                      : 'bg-[#40444b] text-gray-300 hover:bg-[#52575e]'
                  }`}
                >
                  followings ({dummyFollowings.length})
                </a>
                <a
                  href="#"
                  onClick={() => setActiveTab('followers')}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                    activeTab === 'followers'
                      ? 'bg-[#7289da] text-white'
                      : 'bg-[#40444b] text-gray-300 hover:bg-[#52575e]'
                  }`}
                >
                  followers ({dummyFollowers.length})
                </a>
              </div>
            </div>

            <div className="bg-[#282b30] rounded-lg p-4 sm:p-6">
              {activeTab === 'followings' ? (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4">people you follow</h2>
                  {filteredFollowings.length > 0 ? (
                    <div className="space-y-4">
                      {filteredFollowings.map((following) => (
                        <div key={following.id} className="flex items-center justify-between p-4 bg-[#40444b] rounded-lg hover:bg-[#52575e] transition-colors">
                          <div className="flex items-center gap-4">
                            <img
                              src={following.avatar}
                              alt={following.name}
                              className="w-16 h-16 rounded-full border-2 border-[#7289da]"
                            />
                            <div className="flex-1">
                              <div className="font-bold text-white text-lg">{following.name}</div>
                              <div className="text-sm text-gray-400">@{following.username}</div>
                            </div>
                          </div>
                          <a
                            href="#"
                            onClick={() => handleFollowToggle(following.id, following.isFollowing)}
                            className="px-6 py-2 rounded-lg bg-[#40444b] text-gray-300 hover:bg-[#52575e] font-semibold transition-colors border border-gray-600 hover:border-gray-500"
                          >
                            unfollow
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <UserCircleIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2">no followings found</h3>
                      <p className="text-gray-400">try searching for something else</p>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4">people following you</h2>
                  {filteredFollowers.length > 0 ? (
                    <div className="space-y-4">
                      {filteredFollowers.map((follower) => (
                        <div key={follower.id} className="flex items-center justify-between p-4 bg-[#40444b] rounded-lg hover:bg-[#52575e] transition-colors">
                          <div className="flex items-center gap-4">
                            <img
                              src={follower.avatar}
                              alt={follower.name}
                              className="w-16 h-16 rounded-full border-2 border-[#7289da]"
                            />
                            <div className="flex-1">
                              <div className="font-bold text-white text-lg">{follower.name}</div>
                              <div className="text-sm text-gray-400">@{follower.username}</div>
                            </div>
                          </div>
                          <a
                            href="#"
                            onClick={() => handleFollowToggle(follower.id, follower.isFollowing)}
                            className={`px-6 py-2 rounded-lg font-semibold transition-colors border ${
                              follower.isFollowing
                                ? 'bg-[#40444b] text-gray-300 hover:bg-[#52575e] border-gray-600 hover:border-gray-500'
                                : 'bg-[#5865f2] text-white hover:bg-[#4752c4] border-[#5865f2] hover:border-[#4752c4]'
                            }`}
                          >
                            {follower.isFollowing ? 'unfollow' : 'follow'}
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <UserCircleIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2">no followers found</h3>
                      <p className="text-gray-400">try searching for something else</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Followings;
