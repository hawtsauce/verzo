import React, { useState } from 'react';
import {
  HandThumbUpIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  EllipsisHorizontalIcon,
  LinkIcon,
  FlagIcon
} from '@heroicons/react/24/outline';

function Post({ 
  post, 
  user, 
  showUserInfo = true, 
  compact = false 
}) {
  const [openPostId, setOpenPostId] = useState(null);

  const formatContent = (content) => {
    return content.split(' ').map((word, index) => 
      word.startsWith('#') ? (
        <a key={index} href="#" className="text-blue-400 hover:underline">
          {word}
        </a>
      ) : (
        <span key={index}> {word} </span>
      )
    );
  };

  return (
    <div className={`bg-[#282b30] rounded-lg ${compact ? 'p-4' : 'p-6'} flex flex-col gap-4`}>
      {showUserInfo && (
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3">
            <img
              src={user.avatar}
              alt={user.name}
              className={`${compact ? 'w-10 h-10' : 'w-12 h-12'} rounded-full`}
            />
            <div>
              <div className={`font-bold text-white ${compact ? 'text-sm' : 'text-base'}`}>
                {user.name}
              </div>
              <div className={`text-gray-400 ${compact ? 'text-xs' : 'text-sm'}`}>
                @{user.username}
              </div>
            </div>
          </a>
          <div className="ml-auto flex items-center gap-2 text-xs text-gray-500">
            {post.date && `${post.date} · `}{post.time}
            <a href="#" className={`ml-2 px-3 py-1 rounded-lg bg-[#7289da] hover:bg-[#677bc4] text-white font-semibold transition-colors ${compact ? 'text-xs' : 'text-sm'}`}>follow</a>
          </div>
        </div>
      )}
      
      <div className={`leading-relaxed ${compact ? 'text-sm' : 'text-base'}`}>
        {formatContent(post.content)}
      </div>
      
      {post.image && (
        <div className="rounded-lg overflow-hidden">
          <img
            src={post.image}
            alt="Post visual"
            className="w-full h-auto object-cover"
            draggable="false"
          />
        </div>
      )}
      
      <div className={`flex gap-4 pt-4 border-t border-gray-700 ${compact ? 'gap-2' : ''}`}>
        <a href="#" className={`flex items-center justify-center gap-2 flex-1 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors ${compact ? 'text-xs' : 'text-sm'}`}>
          <HandThumbUpIcon className={compact ? 'w-4 h-4' : 'w-5 h-5'} />
          {post.likes ? post.likes : 'like'}
        </a>
        <a href="#" className={`flex items-center justify-center gap-2 flex-1 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors ${compact ? 'text-xs' : 'text-sm'}`}>
          <ChatBubbleOvalLeftIcon className={compact ? 'w-4 h-4' : 'w-5 h-5'} />
          {post.comments ? post.comments : 'comment'}
        </a>
        <a href="#" className={`flex items-center justify-center gap-2 flex-1 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors ${compact ? 'text-xs' : 'text-sm'}`}>
          <ArrowPathRoundedSquareIcon className={compact ? 'w-4 h-4' : 'w-5 h-5'} />
          {post.shares ? post.shares : 'share'}
        </a>
        <div className="relative">
          <a 
            href="#"
            onClick={e => { e.preventDefault(); setOpenPostId(openPostId === post.id ? null : post.id); }}
            className={`flex items-center justify-center gap-2 flex-1 py-2 rounded-lg hover:bg-[#40444b] text-gray-300 font-semibold transition-colors ${compact ? 'text-xs' : 'text-sm'}`}
          >
            <EllipsisHorizontalIcon className={compact ? 'w-4 h-4' : 'w-5 h-5'} />
          </a>
          {openPostId === post.id && (
            <div className={`absolute bottom-full right-0 mb-2 flex flex-col gap-1 bg-[#40444b] p-2 rounded-lg ${compact ? 'w-32' : 'w-38'}`}>
              <a href="#" className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#52575e] text-white font-semibold transition-colors cursor-pointer ${compact ? 'text-xs' : 'text-sm'}`}>
                <LinkIcon className={compact ? 'w-4 h-4' : 'w-5 h-5'} /> Copy Link
              </a>
              <a href="#" className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#52575e] text-white font-semibold transition-colors cursor-pointer ${compact ? 'text-xs' : 'text-sm'}`}>
                <FlagIcon className={compact ? 'w-4 h-4' : 'w-5 h-5'} /> Report
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post; 