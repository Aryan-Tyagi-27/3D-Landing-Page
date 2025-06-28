import React from 'react';

const ContentSections = ({ currentSection }) => {
  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                ESYA'25
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
              Tech Innovation Summit
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Experience the future of technology through interactive 3D navigation. 
              Hover and click on the floating shapes to explore different sections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Exploring
              </button>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About ESYA'25
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">🚀 Innovation Hub</h3>
                <p className="text-gray-300">
                  Discover groundbreaking technologies and revolutionary ideas that will shape tomorrow's world.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">🤝 Networking</h3>
                <p className="text-gray-300">
                  Connect with industry leaders, entrepreneurs, and fellow tech enthusiasts from around the globe.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">🎯 Skill Building</h3>
                <p className="text-gray-300">
                  Participate in hands-on workshops and masterclasses led by industry experts.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">🏆 Competitions</h3>
                <p className="text-gray-300">
                  Showcase your talents in hackathons, coding challenges, and innovation contests.
                </p>
              </div>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Events
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "AI & ML Summit", icon: "🤖", color: "from-purple-500 to-pink-500" },
                { title: "Blockchain Revolution", icon: "⛓️", color: "from-green-500 to-teal-500" },
                { title: "Quantum Computing", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
                { title: "Cybersecurity Workshop", icon: "🛡️", color: "from-red-500 to-orange-500" },
                { title: "IoT Innovation Lab", icon: "🌐", color: "from-indigo-500 to-purple-500" },
                { title: "Startup Pitch", icon: "🚀", color: "from-yellow-500 to-orange-500" }
              ].map((event, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4">{event.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                  <div className={`h-1 w-full bg-gradient-to-r ${event.color} rounded-full`}></div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'speakers':
        return (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                World-Class Speakers
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Dr. Sarah Chen", role: "AI Research Director", company: "TechCorp" },
                { name: "Marcus Rodriguez", role: "Blockchain Pioneer", company: "CryptoLabs" },
                { name: "Prof. Aisha Patel", role: "Quantum Physicist", company: "MIT" }
              ].map((speaker, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-cyan-500/20">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{speaker.name}</h3>
                  <p className="text-cyan-400 mb-1">{speaker.role}</p>
                  <p className="text-gray-400 text-sm">{speaker.company}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'schedule':
        return (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Event Schedule
              </span>
            </h2>
            <div className="space-y-6">
              {[
                { day: "Day 1", date: "March 15", events: ["Opening Ceremony", "AI Summit", "Networking"] },
                { day: "Day 2", date: "March 16", events: ["Workshops", "Panel Discussions", "Competitions"] },
                { day: "Day 3", date: "March 17", events: ["Startup Pitches", "Awards", "Closing Ceremony"] }
              ].map((day, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-cyan-500/20">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{day.day} - {day.date}</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="bg-black/30 rounded-lg p-3 border border-gray-700">
                        <p className="text-white">{event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <span className="text-white">info@esya25.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <span className="text-white">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-white">Tech Convention Center, Silicon Valley</span>
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
      <div className="pointer-events-auto">
        {renderSection()}
      </div>
    </div>
  );
};

export default ContentSections;