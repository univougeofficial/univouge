import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

import Celebrity from './components/Celebrity';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import FloatingActions from './components/FloatingActions';


const App: React.FC = () => {
  return (
    <div className="font-serif text-gray-800">
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
