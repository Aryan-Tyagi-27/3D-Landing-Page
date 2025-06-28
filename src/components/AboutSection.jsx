import React from 'react';

const AboutSection = () => {
  const features = [
    {
      icon: "🚀",
      title: "Innovation Hub",
      description: "Discover groundbreaking technologies and revolutionary ideas that will shape tomorrow's world."
    },
    {
      icon: "🤝",
      title: "Networking",
      description: "Connect with industry leaders, entrepreneurs, and fellow tech enthusiasts from around the globe."
    },
    {
      icon: "🎯",
      title: "Skill Building",
      description: "Participate in hands-on workshops and masterclasses led by industry experts."
    },
    {
      icon: "🏆",
      title: "Competitions",
      description: "Showcase your talents in hackathons, coding challenges, and innovation contests."
    }
  ];

  const stats = [
    { number: "100+", label: "Speakers" },
    { number: "50+", label: "Sessions" },
    { number: "5000+", label: "Attendees" },
    { number: "3", label: "Days" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About ESYA'25
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ESYA'25 is more than just a tech conference – it's a convergence of brilliant minds, 
            cutting-edge innovations, and transformative ideas that will define the future of technology.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-3xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to be part of the future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators, entrepreneurs, and tech enthusiasts at ESYA'25. 
              Don't miss this opportunity to network, learn, and grow.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
              Get Your Tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;