import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-[#1e1f22] text-gray-300 flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Optional decorative background (e.g., sparkles or shapes) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('/sparkle-bg.png')] bg-cover bg-center z-0" />

      {/* Logo */}
      <img src="/logo.png" alt="Verzo Logo" className="w-32 mb-6 z-10" />

      {/* 404 Message Box */}
      <div className="bg-[#282b30] w-full max-w-xl rounded-2xl p-10 text-center space-y-6 border border-[#40444b] z-10 shadow-lg">
        <div className="text-6xl">🚧</div>
        <h1 className="text-5xl font-extrabold text-white tracking-wider">
          Oops! 404
        </h1>
        <p className="text-lg text-gray-400">
          You've stumbled into the void... or maybe just a broken link.
        </p>
        <p className="text-sm text-gray-500 italic">
          Either way, there’s nothing to see here — except this cool error page.
        </p>

        <Link
          to="/"
          className="inline-block mt-4 px-6 py-3 rounded-lg bg-[#7289da] hover:bg-[#677bc4] text-white font-bold transition-all duration-300 shadow-md transform hover:scale-105"
        >
          take me home
        </Link>
      </div>

      {/* Floating decorative emoji */}
      <div className="absolute text-6xl animate-bounce-slow bottom-10 right-10 z-0 opacity-30">
        🧭
      </div>
    </div>
  );
}

export default NotFound;
