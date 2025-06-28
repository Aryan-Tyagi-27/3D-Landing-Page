import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ESYA'25
              </h1>
              <p className="text-xs text-gray-400">Tech Innovation Summit</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Schedule
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;