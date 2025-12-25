import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../Assets/logos/Univouge_logo 1.png';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Signature', 'Portfolio','About', 'Contact'];


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      const offset = 80;
      const topPos = element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: topPos,
        behavior: 'smooth',
      });

      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

         <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
<img src={logo} alt="Univouge Logo" className={`h-14 w-14 lg:h-12 lg:w-12 transition-all duration-300 ${!scrolled ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : ''}`} />
<span className={`hidden lg:block text-2xl font-bold tracking-wide bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent transition-all duration-300 ${!scrolled ? '[text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]' : ''}`}>
  UNIVOUGE
</span>




          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-all duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-300 [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          {/* <button
            onClick={() => scrollToSection('contact')}
            className="hidden lg:block bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Book Appointment
          </button> */}

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors duration-300 ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full py-2 text-left text-gray-700 hover:text-amber-600"
              >
                {item}
              </button>
            ))}

            {/* <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Book Appointment
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
