import React from "react";
import { Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  const navLinks = [
    { label: "About", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Fabrics", id: "fabrics" },
    { label: "Service Areas", id: "services" },   // same section
    { label: "Book Appointment", id: "contact" },  // goes to contact section
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
            Trend With Tradition Guru
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
            <div className="flex items-center gap-3">
              <div className="bg-gray-800 p-3 rounded-full">
                <MessageCircle size={20} className="text-white" />
              </div>
              <span className="text-gray-300">WhatsApp</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-800 p-3 rounded-full">
                <Phone size={20} className="text-white" />
              </div>
              <span className="text-gray-300">+91 98765 43210</span>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-800 p-3 rounded-full">
                <Instagram size={20} className="text-white" />
              </div>
              <span className="text-gray-300">@celebritycouture</span>
            </div>

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
        <p>© 2025 Trend Wih Tradition Guru. All rights reserved.</p>
        <p>Premium Traditional Design</p>
      </div>
    </footer>
  );
};

export default Footer;
