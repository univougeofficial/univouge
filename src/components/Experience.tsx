import React, { useState, useEffect } from "react";
import { Film, Calendar, TrophyIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import nandhiaward from "../Assets/mens/nandhiaward.jpg";
import Achivement1 from "../Assets/mens/Achivement1.jpeg";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const slides = [
  {
    badge: "🏆 Nandi Award Winner",
    title: "Nandi Award Recognition",
    subtitle: "Best Costume Design — Varudu (2010)",
    desc:
      "Winning the Nandi Award for “Varudu” marked a defining milestone in our journey, celebrating culturally rooted storytelling through costume design.",
    img: nandhiaward,
  },
  {
  badge: "🎬 On Set – Racha",
  title: "Racha Movie Costume Design",
  subtitle: "Working with Global Star Ram Charan",
  desc:
    "Behind the scenes of Racha, our costume design journey came alive on set — collaborating closely with Global Star Ram Charan to craft powerful looks that matched the film’s energy, character depth, and cinematic scale. Each outfit was designed to enhance performance, movement, and visual impact, blending contemporary style with story-driven detailing.",
  img: Achivement1,
},
];

const Experience: React.FC = () => {

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [index, setIndex] = useState(0);
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  /* AUTO SLIDE */
  useEffect(() => {
  intervalRef.current = setInterval(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, 7000);

  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
}, []);

  /* ESC CLOSE */
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreenImg(null);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const next = () => setIndex((index + 1) % slides.length);
  const prev = () =>
    setIndex((index - 1 + slides.length) % slides.length);

  return (
    <section id="experience" className="bg-[#faf7f3] py-12 md:py-20">
      {/* ================= TOP ================= */}
      <div className="text-center max-w-4xl mx-auto px-4 md:px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show"
          className="inline-block px-4 md:px-6 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold mb-4 md:mb-6 text-sm md:text-base">
          🏆 Nandi Award Winning Designer
        </motion.div>

        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show"
          className="text-3xl md:text-5xl font-bold mb-2">
          <span className="text-amber-600">Our Journey</span>
        </motion.h2>

        <motion.h3 variants={fadeUp} initial="hidden" whileInView="show"
          className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
          20 Years of Excellence
        </motion.h3>

        <motion.p variants={fadeUp} initial="hidden" whileInView="show"
          className="text-base md:text-lg text-gray-600 mb-8 md:mb-10">
          For over two decades, our designs have shaped unforgettable moments on and off screen.
        </motion.p>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {[
            { icon: TrophyIcon, count: "1", label: "Nandi Award" },
            { icon: Film, count: "50+", label: "Movies" },
            { icon: Calendar, count: "20+", label: "Years Experience" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white rounded-2xl shadow p-6 text-center">
                <Icon size={40} className="text-amber-500 mx-auto mb-3" />
                <div className="text-4xl font-bold text-amber-600">{s.count}</div>
                <div className="text-gray-700 font-semibold">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= SLIDER ================= */}
    
        <div className="relative py-12 md:py-20 px-4 md:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}
              >
                {index % 2 === 0 ? (
                  <>
                    {/* LEFT SIDE - IMAGE WITH DECORATIVE BORDER */}
                    <motion.div 
                      className="relative flex justify-center"
                      initial={{ opacity: 0, x: -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      {/* DECORATIVE MAROON BORDER */}
                      <div className="hidden md:block absolute -top-6 -left-6 w-20 h-20 border-t-4 border-l-4 border-amber-500 z-20" />
                      <div className="hidden md:block absolute -bottom-6 -right-6 w-20 h-20 border-b-4 border-r-4 border-amber-500 z-20" />
                      
                      <img
                        src={slides[index].img}
                        className="w-full max-w-sm md:max-w-none h-[280px] md:h-[350px] object-contain cursor-zoom-in shadow-2xl relative z-10 transition-all duration-300 hover:shadow-xl hover:scale-105"
                        onClick={() => setFullscreenImg(slides[index].img)}
                        alt=""
                      />
                      
                      {/* VERTICAL ACCENT LINE */}
                      <div className="hidden md:block absolute top-0 -left-8 w-2 h-32 bg-amber-500 z-20" />
                    </motion.div>

                    {/* RIGHT SIDE - TEXT CONTENT */}
                    <motion.div 
                      className="space-y-4 md:space-y-6"
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                      <div>
                        <p className="text-amber-700 font-semibold text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
                          {slides[index].badge}
                        </p>
                        
                        <h2 className="text-2xl md:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                          {slides[index].subtitle}
                        </h2>
                      </div>

                      <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-md">
                        {slides[index].desc}
                      </p>
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* LEFT SIDE - TEXT CONTENT */}
                    <motion.div 
                      className="space-y-4 md:space-y-6 order-2 md:order-1"
                      initial={{ opacity: 0, x: -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                      <div>
                        <p className="text-amber-700 font-semibold text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
                          {slides[index].badge}
                        </p>
                        
                        <h2 className="text-2xl md:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                          {slides[index].subtitle}
                        </h2>
                      </div>

                      <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-md">
                        {slides[index].desc}
                      </p>
                    </motion.div>

                    {/* RIGHT SIDE - IMAGE WITH DECORATIVE BORDER */}
                    <motion.div 
                      className="relative flex justify-center order-1 md:order-2"
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      {/* DECORATIVE MAROON BORDER */}
                      <div className="hidden md:block absolute -top-6 -left-6 w-20 h-20 border-t-4 border-l-4 border-amber-500 z-20" />
                      <div className="hidden md:block absolute -bottom-6 -right-6 w-20 h-20 border-b-4 border-r-4 border-amber-500 z-20" />
                      
                      <img
                        src={slides[index].img}
                        className="w-full max-w-sm md:max-w-none h-[280px] md:h-[350px] object-contain cursor-zoom-in shadow-2xl relative z-10 transition-all duration-300 hover:shadow-xl hover:scale-105"
                        onClick={() => setFullscreenImg(slides[index].img)}
                        alt=""
                      />
                      
                      {/* VERTICAL ACCENT LINE */}
                      <div className="hidden md:block absolute top-0 -left-8 w-2 h-32 bg-amber-500 z-20" />
                    </motion.div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* NAVIGATION ARROWS */}
            <div className="flex justify-between items-center mt-8 md:mt-16 gap-4">
              <button 
                onClick={prev}
                className="text-amber-500 hover:text-amber-600 transition flex-shrink-0"
              >
                <svg className="w-6 md:w-8 h-6 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* SLIDE INDICATORS */}
              <div className="flex gap-2 md:gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`transition-all ${
                      i === index
                        ? "bg-amber-500 w-6 md:w-8 h-2 rounded-full"
                        : "bg-amber-200 w-2 h-2 rounded-full hover:bg-amber-300"
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={next}
                className="text-amber-500 hover:text-amber-600 transition flex-shrink-0"
              >
                <svg className="w-6 md:w-8 h-6 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      

      {/* ================= MOVIES ================= */}
  
        <div className="bg-white py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* MOVIES */}
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">
                Movies We <span className="text-amber-600">Worked On</span>
              </h2>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
            {[
              { title: "Pournami", year: "2006", tag: "Classical Dance" },
              { title: "Varudu", year: "2010", tag: "Nandi Award Winner" },
              { title: "Seethamma Vakitlo Sirimalle Chettu", year: "2013", tag: "Family Drama" },
              { title: "Yevadu", year: "2014", tag: "Action Thriller" },
              { title: "MCA", year: "2017", tag: "Action Comedy" },
              { title: "Shatamanam Bhavathi", year: "2017", tag: "Family Drama" },
            ].map((movie, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-right text-gray-500 text-sm">
                  {movie.year}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {movie.title}
                </h3>
                <div className="text-amber-600 text-sm">
                  {movie.tag}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      

      {/* ================= FULLSCREEN MODAL ================= */}
      <AnimatePresence>
        {fullscreenImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
            onClick={() => setFullscreenImg(null)}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setFullscreenImg(null)}
            >
              <X size={36} />
            </button>

            <motion.img
              src={fullscreenImg}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-[95vw] max-h-[95vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
