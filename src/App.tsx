import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

import Celebrity from './components/Celebrity';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import FloatingActions from './components/FloatingActions';
import CurtainReveal from './components/CurtainReveal';


const App: React.FC = () => {
  const [showCurtain, setShowCurtain] = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  // Check if user has already seen the intro in this session
  useEffect(() => {
    const seen = sessionStorage.getItem('univouge_intro_seen');
    if (seen) {
      setShowCurtain(false);
      setHasSeenIntro(true);
    }
  }, []);

  const handleCurtainComplete = () => {
    setShowCurtain(false);
    setHasSeenIntro(true);
    sessionStorage.setItem('univouge_intro_seen', 'true');
  };

  return (
    <div className="font-serif text-gray-800">
      {/* Curtain Reveal Animation */}
      {showCurtain && !hasSeenIntro && (
        <CurtainReveal onComplete={handleCurtainComplete} />
      )}

      <Header />
      <FloatingActions />
      <Home />
      <Experience />
      {/* <Fabrics /> */}
      <Celebrity />
      <Portfolio />

      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
