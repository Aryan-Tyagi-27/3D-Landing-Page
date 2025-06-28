import React from 'react';

const EventsSection = () => {
  const events = [
    {
      title: "AI & Machine Learning Summit",
      description: "Explore the latest breakthroughs in artificial intelligence and machine learning technologies.",
      time: "Day 1 - 10:00 AM",
      category: "Conference",
      color: "from-purple-500 to-pink-500",
      icon: "🤖"
    },
    {
      title: "Blockchain Revolution",
      description: "Discover how blockchain technology is transforming industries worldwide.",
      time: "Day 1 - 2:00 PM",
      category: "Workshop",
      color: "from-green-500 to-teal-500",
      icon: "⛓️"
    },
    {
      title: "Quantum Computing Frontiers",
      description: "Dive into the quantum realm and understand the future of computing.",
      time: "Day 2 - 9:00 AM",
      category: "Keynote",
      color: "from-blue-500 to-cyan-500",
      icon: "⚛️"
    },
    {
      title: "Cybersecurity Masterclass",
      description: "Learn advanced cybersecurity techniques from industry experts.",
      time: "Day 2 - 11:30 AM",
      category: "Masterclass",
      color: "from-red-500 to-orange-500",
      icon: "🛡️"
    },
    {
      title: "IoT Innovation Lab",
      description: "Hands-on experience with Internet of Things devices and applications.",
      time: "Day 2 - 3:00 PM",
      category: "Lab",
      color: "from-indigo-500 to-purple-500",
      icon: "🌐"
    },
    {
      title: "Startup Pitch Competition",
      description: "Watch innovative startups pitch their groundbreaking ideas to investors.",
      time: "Day 3 - 10:00 AM",
      category: "Competition",
      color: "from-yellow-500 to-orange-500",
      icon: "🚀"
    },
    {
      title: "Tech Ethics Panel",
      description: "Discuss the ethical implications of emerging technologies.",
      time: "Day 3 - 1:00 PM",
      category: "Panel",
      color: "from-teal-500 to-green-500",
      icon: "⚖️"
    },
    {
      title: "Future of Work Summit",
      description: "Explore how technology is reshaping the workplace and careers.",
      time: "Day 3 - 4:00 PM",
      category: "Summit",
      color: "from-pink-500 to-rose-500",
      icon: "💼"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Events
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in cutting-edge sessions, workshops, and competitions designed to 
            expand your knowledge and connect you with the future of technology.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 h-full flex flex-col">
                {/* Event Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {event.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${event.color} text-white`}>
                    {event.category}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {event.title}
                </h3>

                {/* Event Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {event.description}
                </p>

                {/* Event Time */}
                <div className="flex items-center text-cyan-400 text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {event.time}
                </div>

                {/* Hover Effect Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-3xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don't miss out on any session!
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the complete schedule and plan your ESYA'25 experience. 
              All events are included with your conference pass.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                View Full Schedule
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;