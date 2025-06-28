import React, { useState } from 'react';
import Header from './components/Header';
import Hero3DScene from './components/Hero3DScene';
import NavigationOrbs from './components/NavigationOrbs';
import ContentDisplay from './components/ContentDisplay';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Fixed Header */}
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
    </div>
  );
};

export default App;