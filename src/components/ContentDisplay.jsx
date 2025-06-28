import React from 'react';

const ContentDisplay = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-none">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                ESYA'25
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8">
              Tech Innovation Summit
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Experience the future of technology through immersive 3D interactions. 
              Navigate through our summit using the floating orbs on the right.
            </p>
            
            {/* Event Details */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-lg">
              <div className="flex items-center space-x-3 text-cyan-400">
                <span className="text-2xl">📅</span>
                <span>March 15-17, 2025</span>
              </div>
              <div className="flex items-center space-x-3 text-cyan-400">
                <span className="text-2xl">📍</span>
                <span>Silicon Valley Convention Center</span>
              </div>
              <div className="flex items-center space-x-3 text-cyan-400">
                <span className="text-2xl">👥</span>
                <span>5000+ Attendees</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/50">
                Register Now
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105">
                View Schedule
              </button>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About ESYA'25
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">The Future is Here</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  ESYA'25 represents the pinnacle of technological innovation, bringing together 
                  the brightest minds from across the globe to showcase groundbreaking 
                  advancements that will shape our future.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  From artificial intelligence to quantum computing, from sustainable tech 
                  to space exploration, our summit covers every frontier of human innovation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                  <div className="text-gray-300">Expert Speakers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Tech Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
                  <div className="text-gray-300">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
                  <div className="text-gray-300">Epic Days</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🚀', title: 'Innovation', desc: 'Cutting-edge technologies and breakthrough innovations' },
                { icon: '🤝', title: 'Networking', desc: 'Connect with industry leaders and tech pioneers' },
                { icon: '🎯', title: 'Learning', desc: 'Hands-on workshops and expert-led sessions' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="text-5xl mb-6 text-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Events
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "AI & Machine Learning Summit", icon: "🤖", color: "from-purple-500 to-pink-500", time: "Day 1 - 10:00 AM" },
                { title: "Blockchain Revolution", icon: "⛓️", color: "from-green-500 to-teal-500", time: "Day 1 - 2:00 PM" },
                { title: "Quantum Computing Frontiers", icon: "⚛️", color: "from-blue-500 to-cyan-500", time: "Day 2 - 9:00 AM" },
                { title: "Cybersecurity Masterclass", icon: "🛡️", color: "from-red-500 to-orange-500", time: "Day 2 - 11:30 AM" },
                { title: "IoT Innovation Lab", icon: "🌐", color: "from-indigo-500 to-purple-500", time: "Day 2 - 3:00 PM" },
                { title: "Startup Pitch Competition", icon: "🚀", color: "from-yellow-500 to-orange-500", time: "Day 3 - 10:00 AM" }
              ].map((event, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className={`h-1 w-full bg-gradient-to-r ${event.color} rounded-full mb-4`}></div>
                  <p className="text-cyan-400 text-sm font-medium">{event.time}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'speakers':
        return (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                World-Class Speakers
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { name: "Dr. Sarah Chen", role: "AI Research Director", company: "TechCorp", expertise: "Machine Learning" },
                { name: "Marcus Rodriguez", role: "Blockchain Pioneer", company: "CryptoLabs", expertise: "Cryptocurrency" },
                { name: "Prof. Aisha Patel", role: "Quantum Physicist", company: "MIT", expertise: "Quantum Computing" },
                { name: "Elena Volkov", role: "Cybersecurity Expert", company: "SecureNet", expertise: "Digital Security" },
                { name: "James Park", role: "IoT Innovator", company: "ConnectedWorld", expertise: "Smart Devices" },
                { name: "Dr. Maria Santos", role: "Biotech Researcher", company: "LifeTech", expertise: "Medical AI" }
              ].map((speaker, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/25">
                    👤
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{speaker.name}</h3>
                  <p className="text-cyan-400 mb-1 font-medium">{speaker.role}</p>
                  <p className="text-gray-400 text-sm mb-3">{speaker.company}</p>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full px-3 py-1 text-xs text-cyan-300 border border-cyan-500/30">
                    {speaker.expertise}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'schedule':
        return (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Event Schedule
              </span>
            </h2>
            
            <div className="space-y-8">
              {[
                { 
                  day: "Day 1", 
                  date: "March 15, 2025", 
                  events: [
                    { time: "9:00 AM", title: "Opening Ceremony", type: "Keynote" },
                    { time: "10:30 AM", title: "AI & ML Summit", type: "Conference" },
                    { time: "2:00 PM", title: "Blockchain Workshop", type: "Workshop" },
                    { time: "4:30 PM", title: "Networking Session", type: "Social" }
                  ]
                },
                { 
                  day: "Day 2", 
                  date: "March 16, 2025", 
                  events: [
                    { time: "9:00 AM", title: "Quantum Computing", type: "Keynote" },
                    { time: "11:30 AM", title: "Cybersecurity Masterclass", type: "Masterclass" },
                    { time: "3:00 PM", title: "IoT Innovation Lab", type: "Lab" },
                    { time: "5:00 PM", title: "Panel Discussion", type: "Panel" }
                  ]
                },
                { 
                  day: "Day 3", 
                  date: "March 17, 2025", 
                  events: [
                    { time: "10:00 AM", title: "Startup Pitch Competition", type: "Competition" },
                    { time: "1:00 PM", title: "Tech Ethics Panel", type: "Panel" },
                    { time: "4:00 PM", title: "Awards Ceremony", type: "Ceremony" },
                    { time: "6:00 PM", title: "Closing Gala", type: "Social" }
                  ]
                }
              ].map((day, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20">
                  <h3 className="text-3xl font-semibold text-cyan-400 mb-6">{day.day} - {day.date}</h3>
                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-center justify-between bg-black/30 rounded-lg p-4 border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="text-cyan-400 font-mono text-sm bg-cyan-500/10 px-3 py-1 rounded-full">
                            {event.time}
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{event.title}</h4>
                          </div>
                        </div>
                        <div className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                          {event.type}
                        </div>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-xl">
                      📧
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">info@esya25.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-xl">
                      📞
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-xl">
                      📍
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">Silicon Valley Convention Center</p>
                      <p className="text-gray-400 text-sm">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200 resize-none"
                  ></textarea>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </button>
                </form>
              </div>
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