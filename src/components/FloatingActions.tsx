import React, { useState } from "react";
import { Instagram, Phone, Menu, X } from "lucide-react";

const FloatingActions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-6 z-[999] flex flex-col gap-4 items-center">
      {/* Menu Items - Show when open */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in fade-in zoom-in duration-200">
          {/* WhatsApp */}
          <a
            href="https://wa.me/918341550616"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 rounded-full shadow-xl
                       flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-8 h-8"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/univouge_official?igsh=eTdjMDBqbDRiNmN4&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 
                       rounded-full shadow-xl flex items-center justify-center hover:scale-110 
                       transition-all duration-300"
          >
            <Instagram size={28} color="white" />
          </a>

          {/* Call */}
          <a
            href="tel:+918341550616"
            className="w-14 h-14 bg-amber-500 rounded-full shadow-xl 
                       flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            <Phone size={28} color="white" />
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-amber-500 rounded-full shadow-xl 
                   flex items-center justify-center hover:scale-110 transition-all duration-300"
      >
        {isOpen ? (
          <X size={28} color="white" />
        ) : (
          <Menu size={28} color="white" />
        )}
      </button>
    </div>
  );
};

export default FloatingActions;
