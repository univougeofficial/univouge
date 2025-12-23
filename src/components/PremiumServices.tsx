import React from "react";
import { Heart, Film, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

const PremiumServices: React.FC = () => {
  const cards = [
    {
      icon: <Heart className="text-white" size={28} />,
      title: "Wedding Styling",
      desc:
        "Bespoke bridal and groom ensembles featuring authentic silk, intricate zari work, and jewelry consultation.",
      points: ["Bridal Consultation", "Custom Designs", "Jewelry Coordination", "Family Styling"],
    },
    {
      icon: <Film className="text-white" size={28} />,
      title: "Movie Costumes",
      desc: "Authentic and contemporary ethnic wear for film productions.",
      points: ["Period Research", "Custom Creation", "Multiple Fittings", "On-Set Support"],
    },
    {
      icon: <Calendar className="text-white" size={28} />,
      title: "Event Couture",
      desc: "Statement pieces for award ceremonies and high-profile events.",
      points: ["Event Consultation", "Designer Collection", "Styling Services", "Alterations"],
    },
    {
      icon: <Users className="text-white" size={28} />,
      title: "Family Styling",
      desc: "Coordinated attire ensuring harmonious and elegant family ensembles.",
      points: ["Group Consultation", "Theme Coordination", "All Age Groups", "Complete Packages"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#faf7f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-5xl font-semibold text-center mb-3">
          Our <span className="text-amber-600">Services</span>
        </h2>

        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Comprehensive styling solutions for every occasion
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-14">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: false }} 
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.15,
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 18px 40px rgba(0,0,0,0.18)",
                transition: { duration: 0.25 },
              }}
              className="
                p-10 
                rounded-3xl 
                border border-amber-300 
                bg-white 
                shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                transition-all 
                duration-300 
                cursor-pointer
              "
            >
              {/* Header */}
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-red-300 rounded-full flex items-center justify-center">
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-amber-700">{card.title}</h3>
                  <p className="text-gray-700 text-sm">{card.desc}</p>
                </div>
              </div>

              {/* Points */}
              <ul className="mt-4 text-gray-700 space-y-2">
                {card.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PremiumServices;
