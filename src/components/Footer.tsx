import React from "react";
import { Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  const navLinks = [
     { label: "Home", id: "home" },
     { label: "Signature", id: "signature" }, 
     { label: "Portfolio", id: "portfolio" },
     { label: "About", id: "about" },
     { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      const topPos =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        80; // header offset
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* ---------------- LEFT SECTION ---------------- */}
        <div>
          <h2 className="text-3xl font-bold text-amber-500 mb-4">
           UNIVOUGE
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Traditional Indian costume design, crafted exclusively for the spotlight — where heritage meets luxury.
          </p>
        </div>

        {/* ---------------- MIDDLE SECTION ---------------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-200">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="hover:text-amber-400 cursor-pointer"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- RIGHT SECTION ---------------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-200">
            Connect With Us
          </h3>

          <div className="space-y-5">

            {/* WhatsApp */}
            <a
              href="https://wa.me/918341550616"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-amber-400 transition"
            >
              <div className="bg-gray-800 p-3 rounded-full">
                <MessageCircle size={20} className="text-white" />
              </div>
              <span className="text-gray-300">+91 83415 50616</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+918341550616"
              className="flex items-center gap-3 hover:text-amber-400 transition"
            >
              <div className="bg-gray-800 p-3 rounded-full">
                <Phone size={20} className="text-white" />
              </div>
              <span className="text-gray-300">+91 83415 50616</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/univouge_official?igsh=eTdjMDBqbDRiNmN4&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-amber-400 transition"
            >
              <div className="bg-gray-800 p-3 rounded-full">
                <Instagram size={20} className="text-white" />
              </div>
              <span className="text-gray-300">@univouge_official</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-800 p-3 rounded-full">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <p className="text-gray-300">Hyderabad</p>
                <p className="text-gray-500 text-sm">Serving premium areas</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ---------------- BOTTOM BAR ---------------- */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
        <p>© 2025 UNIVOUGE. All rights reserved.</p>
        <p>Premium Traditional Design</p>
      </div>
    </footer>
  );
};

export default Footer;
