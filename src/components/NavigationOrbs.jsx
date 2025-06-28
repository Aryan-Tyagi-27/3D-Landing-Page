import React from 'react';

const NavigationOrbs = ({ activeSection, onSectionChange }) => {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠', color: 'from-cyan-400 to-blue-500' },
    { id: 'about', label: 'About', icon: '📋', color: 'from-green-400 to-teal-500' },
    { id: 'events', label: 'Events', icon: '🎯', color: 'from-purple-400 to-pink-500' },
    { id: 'speakers', label: 'Speakers', icon: '🎤', color: 'from-yellow-400 to-orange-500' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'from-indigo-400 to-purple-500' },
    { id: 'contact', label: 'Contact', icon: '📞', color: 'from-pink-400 to-rose-500' }
  ];

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
      {navigationItems.map((item, index) => (
        <div
          key={item.id}
          className={`group relative cursor-pointer transition-all duration-300 ${
            activeSection === item.id ? 'scale-110' : 'hover:scale-105'
          }`}
          onClick={() => onSectionChange(item.id)}
        >
          {/* Orb */}
          <div className={`
            w-16 h-16 rounded-full bg-gradient-to-br ${item.color} 
            flex items-center justify-center text-2xl
            shadow-lg transition-all duration-300
            ${activeSection === item.id 
              ? 'shadow-2xl shadow-cyan-500/50 ring-4 ring-cyan-400/30' 
              : 'hover:shadow-xl hover:shadow-cyan-500/30'
            }
          `}>
            {item.icon}
          </div>

          {/* Label */}
          <div className={`
            absolute right-20 top-1/2 transform -translate-y-1/2
            bg-black/80 backdrop-blur-md rounded-lg px-3 py-2
            border border-cyan-500/30 text-white text-sm font-medium
            opacity-0 group-hover:opacity-100 transition-all duration-300
            pointer-events-none whitespace-nowrap
          `}>
            {item.label}
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/80 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>

          {/* Active indicator */}
          {activeSection === item.id && (
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavigationOrbs;