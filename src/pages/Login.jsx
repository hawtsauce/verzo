import React from 'react';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

function Logo() {
  return (
    <div className="flex justify-center mb-8">
      <img src="/logo.png" alt="Verzo Logo" className="h-10 w-auto" />
    </div>
  );
}

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1f22]">
      <div className="w-full max-w-sm bg-[#282b30] rounded-lg p-8 flex flex-col gap-5">
        <Logo />
        <h2 className="text-xl font-bold text-center text-white mb-1">welcome back</h2>
        <p className="text-center text-gray-400 text-sm mb-6">sign in to continue your journey</p>
        
        <form className="flex flex-col gap-4">
          <div className="group">
            <div className="flex items-center gap-3 bg-[#40444b] rounded-lg px-3 py-3 transition-all duration-300 group-focus-within:bg-[#40444b]/70">
              <EnvelopeIcon className="w-5 h-5 text-gray-400 group-focus-within:text-[#7289da] transition-colors" />
              <input 
                type="email" 
                placeholder="enter your email" 
                className="bg-transparent flex-1 outline-none text-gray-300 placeholder-gray-500 focus:text-white text-sm" 
              />
            </div>
          </div>
          
          <div className="group">
            <div className="flex items-center gap-3 bg-[#40444b] rounded-lg px-3 py-3 transition-all duration-300 group-focus-within:bg-[#40444b]/70">
              <LockClosedIcon className="w-5 h-5 text-gray-400 group-focus-within:text-[#7289da] transition-colors" />
              <input 
                type="password" 
                placeholder="enter your password" 
                className="bg-transparent flex-1 outline-none text-gray-300 placeholder-gray-500 focus:text-white text-sm" 
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full mt-2 py-3 rounded-lg bg-[#7289da] hover:bg-[#677bc4] text-white font-bold text-sm transition-all duration-300 cursor-pointer"
          >
            sign in
          </button>
        </form>
        
        <div className="flex items-center gap-3 mt-6">
          <div className="flex-1 h-px bg-[#40444b]/50"></div>
          <span className="text-gray-500 text-xs">or</span>
          <div className="flex-1 h-px bg-[#40444b]/50"></div>
        </div>
        
        <p className="text-center text-gray-400 text-xs mt-4">
          don't have an account? <a href="/register" className="text-[#7289da] hover:text-[#5865f2] font-semibold transition-colors">create one</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
