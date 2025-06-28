import React from 'react';

const NavigationOrbs = ({ activeSection, onSectionChange }) => {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '📋' },
    { id: 'events', label: 'Events', icon: '🎯' },
    { id: 'speakers', label: 'Speakers', icon: '🎤' },
    { id: 'schedule', label: 'Schedule', icon: '📅' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
      {navigationItems.map((item) => (
        <div
          key={item.id}
          className="group relative cursor-pointer"
          onClick={() => onSectionChange(item.id)}
        >
          {/* Orb */}
          <div className={`
            w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600
            flex items-center justify-center text-lg
            transition-all duration-300 hover:scale-110
            ${activeSection === item.id ? 'ring-2 ring-cyan-400 scale-110' : ''}
          `}>
            {item.icon}
          </div>

          {/* Label */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavigationOrbs;