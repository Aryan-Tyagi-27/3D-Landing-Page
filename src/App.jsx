import React, { useState } from 'react';
import Header from './components/Header';
import Creative3DNavigation from './components/Creative3DNavigation';
import ContentSections from './components/ContentSections';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      
      {/* 3D Navigation Background */}
      <Creative3DNavigation 
        onNavigate={handleNavigation} 
        currentSection={currentSection}
      />
      
      {/* Content Overlay */}
      <ContentSections currentSection={currentSection} />
      
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default App;