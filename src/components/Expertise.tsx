import React, { useState, useEffect } from "react";
import { Scissors, Palette, Award, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Expertise: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const expertiseCards = [
    {
      icon: Scissors,
      title: "Custom Tailoring for Celebrities",
      items: [
        "Indian ethnic wear",
        "Bridal & wedding couture",
        "Movie & cinema costumes",
        "Event & red carpet styling",
        "Corporate & fusion wear",
        "Physique-based custom designs",
      ],
    },
    {
      icon: Palette,
      title: "Material & Fabric Expertise",
      items: [
        "Color consultation & matching",
        "Premium silk selection",
        "Kanchipuram & handloom fabrics",
        "Traditional zari work",
        "Fabric draping techniques",
        "Texture & embellishment guidance",
      ],
    },
    {
      icon: Award,
      title: "Designer Experience",
      items: [
        "Celebrity clientele portfolio",
        "Film industry collaborations",
        "Wedding designer network",
        "Traditional craft mastery",
        "Contemporary fusion expertise",
        "High-profile event styling",
      ],
    },
    {
      icon: Clock,
      title: "Premium Service",
      items: [
        "Personal designer visits",
        "Quick turnaround time",
        "Flexible scheduling",
        "Multiple fitting sessions",
        "Before & after consultations",
        "Exclusive Hyderabad service",
      ],
    },
  ];

  // Auto rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % expertiseCards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [expertiseCards.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % expertiseCards.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + expertiseCards.length) % expertiseCards.length);

  const getVisibleIndices = () => {
    return [
      currentIndex,
      (currentIndex + 1) % expertiseCards.length,
      (currentIndex + 2) % expertiseCards.length,
    ];
  };

  return (
    <section id="expertise" className="py-16 bg-[#faf7f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-semibold text-center mb-3">
          Our <span className="text-amber-600">Expertise</span>
        </h2>

        <p className="text-center text-gray-600 text-base mb-12 max-w-2xl mx-auto">
          Comprehensive celebrity styling services backed by years of
          traditional craftsmanship
        </p>


        {/* ROTATING CAROUSEL */}
        <div className="mb-12">
          {/* Cards Display */}
          <div className="flex justify-center items-center gap-6 mb-8 min-h-[400px]">
            {getVisibleIndices().map((idx, position) => {
              const card = expertiseCards[idx];
              const IconComponent = card.icon;
              const isCenter = position === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.5, 
                    scale: isCenter ? 1 : 0.85,
                    rotateY: 0,
                  }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`${
                    isCenter ? "w-full md:w-1/2" : "hidden md:block md:w-1/4"
                  } p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-white border border-gray-100 transition-all`}
                >
                  <div className="flex gap-4 items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-amber-200 to-green-200">
                      <IconComponent className="text-amber-700" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold">{card.title}</h3>
                  </div>

                  <ul className="space-y-3 text-gray-700">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-amber-500 mr-3">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-amber-50 transition-all"
            >
              <ChevronLeft className="text-amber-600" size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {expertiseCards.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-amber-500 w-8 h-2"
                      : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-amber-50 transition-all"
            >
              <ChevronRight className="text-amber-600" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
