import React from 'react';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

function Logo() {
  return (
    <div className="flex flex-col items-center mb-6">
      <img src="/logo.png" alt="Verzo Logo" className="w-14 h-14 mb-2" />
      <span className="text-3xl font-extrabold tracking-tight text-white">verzo</span>
    </div>
  );
}

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#18191a]">
      <div className="w-full max-w-md bg-[#242526] rounded-3xl border border-[#393a3b] p-8 flex flex-col gap-6">
        <Logo />
        <h2 className="text-2xl font-bold text-center text-white mb-2">Sign in to your account</h2>
        <form className="flex flex-col gap-4">
          <div className="flex items-center gap-2 bg-[#202124] rounded-full px-4 py-3 border border-[#393a3b]">
            <EnvelopeIcon className="w-6 h-6 text-blue-400" />
            <input type="email" placeholder="Email" className="bg-transparent flex-1 outline-none text-white placeholder-gray-400" />
          </div>
          <div className="flex items-center gap-2 bg-[#202124] rounded-full px-4 py-3 border border-[#393a3b]">
            <LockClosedIcon className="w-6 h-6 text-blue-400" />
            <input type="password" placeholder="Password" className="bg-transparent flex-1 outline-none text-white placeholder-gray-400" />
          </div>
          <button type="submit" className="w-full mt-2 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition">Login</button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-2">Don't have an account? <a href="/register" className="text-blue-400 hover:underline">Register</a></p>
      </div>
    </div>
  );
}

export default Login;
