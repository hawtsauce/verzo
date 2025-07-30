import { useState } from 'react';
import {
  CameraIcon,
  PencilIcon,
  MapPinIcon,
  CalendarIcon,
  GlobeAltIcon,
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  LinkIcon,
  FlagIcon,
  PhotoIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Sidebar from '../components/Sidebar';
import Post from '../components/Post';

const user = {
  name: 'jane doe',
  username: 'janedoe',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  coverPhoto: 'https://picsum.photos/id/1018/1200/400',
  bio: 'just another nature lover 🌿 coffee addict ☕ coder 💻',
  joinDate: 'Joined January 2022',
  location: 'San Francisco, CA',
  website: 'https://janedoe.dev',
  mutualFriends: 12,
  followers: 234,
  following: 156,
  posts: 47
};

const mutualFriends = [
  { name: 'chris', avatar: 'https://randomuser.me/api/portraits/men/23.jpg' },
  { name: 'lily', avatar: 'https://randomuser.me/api/portraits/women/34.jpg' },
  { name: 'mike', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
  { name: 'sara', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { name: 'alex', avatar: 'https://randomuser.me/api/portraits/men/55.jpg' },
  { name: 'emma', avatar: 'https://randomuser.me/api/portraits/women/67.jpg' },
];

const userPosts = [
  {
    id: 1,
    content: 'enjoying the beautiful weather today! ☀️🌳 #sunny #nature',
    hashtags: ['#sunny', '#nature'],
    time: '2 hours ago',
    likes: 24,
    comments: 8,
    shares: 3,
    image: 'https://picsum.photos/id/1015/600/400',
  },
  {
    id: 2,
    content: 'just finished a 5k run! 🏃‍♂️💨 #running #fitness',
    hashtags: ['#running', '#fitness'],
    time: '1 day ago',
    likes: 18,
    comments: 5,
    shares: 2,
  },
  {
    id: 3,
    content: 'coffee break with friends ☕ #coffee #friends',
    hashtags: ['#coffee', '#friends'],
    time: '3 days ago',
    likes: 32,
    comments: 12,
    shares: 7,
    image: 'https://picsum.photos/id/1020/600/400',
  },
];

function Profile() {
  const [openPostId, setOpenPostId] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('posts');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1e1f22] text-gray-300">
      
      {/* Create Post Modal */}
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
        currentPage="profile"
      />

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row pl-[17rem]">
        {/* Profile Content */}
        <main className="flex-1 flex flex-col items-center relative min-h-screen">
          <div className="w-full max-w-5xl pt-8 pb-20 space-y-6">
            
            {/* Cover Photo and Profile Picture */}
            <div className="relative">
              <div className="relative h-64 rounded-t-lg overflow-hidden">
                <img src="https://picsum.photos/id/1018/1200/400" alt="Cover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <button className="absolute top-4 right-4 p-2 bg-[#40444b] rounded-full hover:bg-[#52575e] transition-colors">
                  <CameraIcon className="w-5 h-5 text-white" />
                </button>
              </div>
              {/* Profile Picture */}
              <div className="absolute -bottom-16 left-8">
                <div className="relative">
                  <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full border-4 border-[#282b30]" />
                  <button className="absolute bottom-2 right-2 p-2 bg-[#40444b] rounded-full hover:bg-[#52575e] transition-colors">
                    <CameraIcon className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="bg-[#282b30] rounded-b-lg p-6 pt-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                  <p className="text-gray-400 text-lg">@{user.username}</p>
                </div>
                <button className="px-6 py-2 bg-[#7289da] hover:bg-[#677bc4] text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
                  <PencilIcon className="w-4 h-4" />
                  edit profile
                </button>
              </div>
              
              <p className="text-lg text-gray-300 mb-4">{user.bio}</p>
              
              <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GlobeAltIcon className="w-4 h-4" />
                  <a href={user.website} className="text-[#7289da] hover:underline">{user.website}</a>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{user.joinDate}</span>
                </div>
              </div>
              
              <div className="flex gap-8 text-sm mb-6">
                <div className="text-center">
                  <div className="font-bold text-white text-lg">{user.posts}</div>
                  <div className="text-gray-400">posts</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-white text-lg">{user.followers}</div>
                  <div className="text-gray-400">followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-white text-lg">{user.following}</div>
                  <div className="text-gray-400">following</div>
                </div>
              </div>

              {/* Mutual Friends */}
              <div className="border-t border-[#40444b] pt-4">
                <h2 className="text-base font-bold text-white mb-3">mutual friends</h2>
                <div className="flex flex-wrap gap-3">
                  {mutualFriends.map((friend) => (
                    <div key={friend.name} className="text-center">
                      <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full mb-1" />
                      <p className="text-xs text-gray-300">{friend.name}</p>
                    </div>
                  ))}
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[#40444b] flex items-center justify-center mb-1">
                      <span className="text-gray-400 font-bold text-xs">+{user.mutualFriends - mutualFriends.length}</span>
                    </div>
                    <p className="text-xs text-gray-400">more</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Section */}
            <div className="bg-[#282b30] rounded-lg">
              <div className="p-6 border-b border-[#40444b]">
                <h2 className="text-xl font-bold text-white">posts</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {userPosts.map(post => (
                    <Post key={post.id} post={post} user={user} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Profile Content */}
      <main className="md:hidden flex-1 flex flex-col items-center relative min-h-screen">
        <div className="w-full pt-4 pb-20 space-y-4 px-4">
          
          {/* Mobile Cover Photo */}
          <div className="relative">
            <div className="relative h-48 rounded-t-lg overflow-hidden">
              <img src="https://picsum.photos/id/1018/1200/400" alt="Cover" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            
            {/* Mobile Profile Picture */}
            <div className="absolute -bottom-12 left-4">
              <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full border-4 border-[#282b30]" />
            </div>
          </div>

          {/* Mobile Profile Info */}
          <div className="bg-[#282b30] rounded-b-lg p-4 pt-16">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">{user.name}</h1>
                <p className="text-gray-400 text-sm">@{user.username}</p>
              </div>
              <button className="px-4 py-2 bg-[#7289da] hover:bg-[#677bc4] text-white font-semibold rounded-lg transition-colors flex items-center gap-2 text-sm">
                <PencilIcon className="w-4 h-4" />
                edit
              </button>
            </div>
            <p className="text-gray-300 mb-4">{user.bio}</p>
            
            <div className="flex gap-6 text-sm mb-4">
              <div className="text-center">
                <div className="font-bold text-white">{user.posts}</div>
                <div className="text-gray-400">posts</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-white">{user.followers}</div>
                <div className="text-gray-400">followers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-white">{user.following}</div>
                <div className="text-gray-400">following</div>
              </div>
            </div>

            {/* Mobile Mutual Friends */}
            <div className="border-t border-[#40444b] pt-4">
              <h2 className="text-lg font-bold text-white mb-3">mutual friends</h2>
              <div className="flex flex-wrap gap-3">
                {mutualFriends.map((friend) => (
                  <div key={friend.name} className="text-center">
                    <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full mb-1" />
                    <p className="text-xs text-gray-300">{friend.name}</p>
                  </div>
                ))}
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#40444b] flex items-center justify-center mb-1">
                    <span className="text-gray-400 font-bold text-xs">+{user.mutualFriends - mutualFriends.length}</span>
                  </div>
                  <p className="text-xs text-gray-400">more</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Posts Section */}
          <div className="bg-[#282b30] rounded-lg">
            <div className="p-4 border-b border-[#40444b]">
              <h2 className="text-lg font-bold text-white">posts</h2>
            </div>
            
            <div className="p-4">
              <div className="space-y-4">
                {userPosts.map(post => (
                  <Post key={post.id} post={post} user={user} compact={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
