import React, { useState } from 'react';
import Header from './components/Header';
import Hero3DScene from './components/Hero3DScene';
import NavigationOrbs from './components/NavigationOrbs';
import ContentDisplay from './components/ContentDisplay';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Main 3D Hero Scene */}
      <Hero3DScene />
      
      {/* Navigation Orbs */}
      <NavigationOrbs 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      {/* Content Display */}
      <ContentDisplay activeSection={activeSection} />
      
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default App;