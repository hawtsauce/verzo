import { useState } from 'react';
import {
  PhotoIcon,
  VideoCameraIcon,
  TagIcon,
  MusicalNoteIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

function CreatePostModal({ isOpen, onClose, user }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-[#282b30] rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">create post</h2>
          <a href="#" onClick={onClose} className="bg-[#40444b] rounded-full p-2 cursor-pointer hover:bg-[#52575e] flex items-center justify-center">
            <XMarkIcon className="w-6 h-6 text-gray-400" />
          </a>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" draggable="false" />
          <div>
            <div className="font-bold text-lg text-white">{user.name}</div>
            <div className="text-sm text-gray-400">@{user.username}</div>
          </div>
        </div>
        <textarea
          className="w-full bg-[#40444b] rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7289da] border-transparent focus:border-transparent"
          rows="5"
          placeholder={`what's on your mind, ${user.name}?`}
        ></textarea>
        <div className="flex gap-4 mt-4 border-t border-gray-700 pt-4">
          <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#52575e] text-white font-semibold transition-colors cursor-pointer hover:bg-[#677bc4]">
            <PhotoIcon className="w-6 h-6 text-green-300" /> image
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#52575e] text-white font-semibold transition-colors cursor-pointer hover:bg-[#677bc4]">
            <VideoCameraIcon className="w-6 h-6 text-red-300" /> video
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#52575e] text-white font-semibold transition-colors cursor-pointer hover:bg-[#677bc4]">
            <TagIcon className="w-6 h-6 text-purple-300" /> tags
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#52575e] text-white font-semibold transition-colors cursor-pointer hover:bg-[#677bc4]">
            <MusicalNoteIcon className="w-6 h-6 text-blue-300" /> audio
          </a>
        </div>
        <div className="flex justify-end mt-4">
          <a href="#" className="px-6 py-3 rounded-lg bg-[#7289da] hover:bg-[#677bc4] text-white font-bold transition-all cursor-pointer">post</a>
        </div>
      </div>
    </div>
  );
}

export default CreatePostModal;