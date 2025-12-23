import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Film,
  Users,
  Sparkles,
  Palette,
  Scissors,
  Truck,
} from "lucide-react";

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      icon: Sparkles,
      title: "Styling with Tradition",
      desc: "Inspired by generations of craftsmanship, we bring together heritage silks, traditional patterns, and refined detailing.",
    },


    {
      icon: Scissors,
      title: "Precision Craftsmanship",
      desc: "Every outfit is carefully handcrafted, with close attention to each stitch, fabric detail, and finishing touch.",
    },

    {
      icon: Heart,
      title: "Wedding Styling",
      desc: "From the bride and groom to the family, we design elegant wedding looks that feel personal, timeless, and beautifully coordinated.",
    },
    {
      icon: Film,
      title: "Movie Costumes",
      desc: "From concept to screen, we design costumes that reflect character, culture, and story through thoughtful research and expert craftsmanship.",
    },
    {
      icon: Palette,
      title: "Custom Design Consultation",
      desc: "We work closely with you to understand your vision, helping select fabrics, colors, and designs that truly reflect your personality.",
    },
    {
      icon: Users,
      title: "Family Ensemble Styling",
      desc: "From elders to little ones, we design coordinated family outfits that celebrate togetherness, tradition, and timeless elegance.",
    },
    {
      icon: Truck,
      title: "Signature Client Experience",
      desc: "An exclusive, thoughtfully guided process where every step is handled with care, precision, and personal attention.",
    },

  ];

  // Auto rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [items.length]);

  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);

  const computeDelta = (i: number) => {
    let delta = i - currentIndex;
    if (delta > items.length / 2) delta -= items.length;
    if (delta < -items.length / 2) delta += items.length;
    return delta;
  };

  return (
    <section id="about" className="py-24 bg-[#faf7f3] overflow-hidden">
      <div className="max-w-full mx-auto">
        <h2 className="text-5xl font-semibold text-center mb-3">
          Our <span className="text-amber-600">Expertise</span>
        </h2>

        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          A blend of heritage craftsmanship, modern couture, and premium styling
          services curated for weddings, films, and prestigious events.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto mb-24">
        <h3 className="text-4xl font-semibold text-gray-800 mb-8">
          A Thoughtful Approach to Timeless Styling
        </h3>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-amber-600">Univouge</span>,
            we believe true style begins with understanding — understanding people,
            traditions, and the moments that define a lifetime. Every design journey
            starts with listening to your story, your culture, and your vision.
            Rooted in  Indian heritage and refined through contemporary design,
            our creations honor time-tested craftsmanship while embracing modern elegance.
          </p>

          <p>
            From weddings and family celebrations to cinema and prestigious events,
            we approach every creation with care, precision, and authenticity.
            Each fabric is thoughtfully chosen, every detail carefully crafted,
            and every fit perfected to ensure comfort, confidence, and grace.
            At Univouge, luxury is not just seen — it is felt.
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-lg text-gray-700 text-center"
        >
          Step into a world of timeless elegance and bespoke styling.
        </motion.p>
      </div>
      {/* CAROUSEL WITH ADVANCED TRANSITIONS */}
      <div className="relative w-full overflow-visible px-0">
        <div className="w-full h-[420px] flex items-center justify-center relative px-20">
          {items.map((item, i) => {
            const Icon = item.icon;
            const delta = computeDelta(i);
            const x = delta * 300; 
            const isCenter = delta === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  x,
                  opacity: Math.abs(delta) > 3 ? 0 : 1,
                  scale: isCenter ? 1 : 0.86
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ zIndex: isCenter ? 20 : 10 - Math.abs(delta) }}
                className="absolute w-[280px] md:w-[320px] h-[340px] rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-amber-200 hover:shadow-xl"
              >
                <div className="relative w-full h-full flex flex-col">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-amber-600" size={32} />
                  </div>

                  <h3 className="text-xl font-bold text-amber-700 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 flex-1 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-amber-200 text-amber-600 hover:bg-amber-50 transition z-30"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-amber-200 text-amber-600 hover:bg-amber-50 transition z-30"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8 px-6">
          {items.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all ${i === currentIndex
                  ? "bg-amber-500 w-8 h-2"
                  : "bg-amber-200 w-2 h-2 hover:bg-amber-300"
                }`}
              aria-label={`Go to ${i + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
