import React from 'react';

const ContentDisplay = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                ESYA'25
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
              Tech Innovation Summit
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Experience the future of technology through immersive 3D interactions. 
              Navigate through our summit using the floating orbs on the right.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center space-x-2 text-cyan-400">
                <span>📅</span>
                <span>March 15-17, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <span>📍</span>
                <span>Silicon Valley</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <span>👥</span>
                <span>5000+ Attendees</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
                Register Now
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
                View Schedule
              </button>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About ESYA'25
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              The premier tech innovation summit bringing together the brightest minds 
              to shape the future of technology.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-cyan-500/20">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Innovation</h3>
                <p className="text-gray-300">Cutting-edge technologies and breakthrough innovations</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-cyan-500/20">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Networking</h3>
                <p className="text-gray-300">Connect with industry leaders and tech pioneers</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-cyan-500/20">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Learning</h3>
                <p className="text-gray-300">Hands-on workshops and expert-led sessions</p>
              </div>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Events
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "AI & ML Summit", icon: "🤖", time: "Day 1 - 10:00 AM" },
                { title: "Blockchain Workshop", icon: "⛓️", time: "Day 1 - 2:00 PM" },
                { title: "Quantum Computing", icon: "⚛️", time: "Day 2 - 9:00 AM" },
                { title: "Cybersecurity", icon: "🛡️", time: "Day 2 - 11:30 AM" },
                { title: "IoT Innovation", icon: "🌐", time: "Day 2 - 3:00 PM" },
                { title: "Startup Pitch", icon: "🚀", time: "Day 3 - 10:00 AM" }
              ].map((event, index) => (
                <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-3xl mb-4">{event.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-cyan-400 text-sm">{event.time}</p>
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
                Expert Speakers
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Dr. Sarah Chen", role: "AI Research Director", company: "TechCorp" },
                { name: "Marcus Rodriguez", role: "Blockchain Pioneer", company: "CryptoLabs" },
                { name: "Prof. Aisha Patel", role: "Quantum Physicist", company: "MIT" }
              ].map((speaker, index) => (
                <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-cyan-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{speaker.name}</h3>
                  <p className="text-cyan-400 text-sm mb-1">{speaker.role}</p>
                  <p className="text-gray-400 text-xs">{speaker.company}</p>
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
                { day: "Day 3", date: "March 17", events: ["Startup Pitches", "Awards", "Closing"] }
              ].map((day, index) => (
                <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">{day.day} - {day.date}</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="bg-black/30 rounded-lg p-3 text-center">
                        <p className="text-white text-sm">{event}</p>
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
            <div className="bg-gray-900/50 rounded-xl p-8 border border-cyan-500/20">
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-xl">📧</span>
                  <span className="text-white">info@esya25.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-xl">📞</span>
                  <span className="text-white">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-xl">📍</span>
                  <span className="text-white">Silicon Valley, CA</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Send Message
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative z-30 min-h-screen flex items-center justify-center p-8">
      <div className="w-full">
        {renderContent()}
      </div>
    </div>
  );
};

export default ContentDisplay;