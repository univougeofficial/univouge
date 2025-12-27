import React, { useState, useEffect } from "react";
import { Film, Calendar, TrophyIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import nandhiaward from "../Assets/mens/nandhiaward.jpg";
import Achivement1 from "../Assets/mens/Achivement1.jpeg";
import raviKumar from "../Assets/RAVIKUMAR.jpeg";
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
      "Winning the Nandi Award for 'Varudu' marked a defining milestone in our journey, celebrating culturally rooted storytelling through costume design.",
    img: nandhiaward,
  },
  {
  badge: "🎬 On Set – Racha",
  title: "Racha Movie Costume Design",
  subtitle: "Working with Global Star Ram Charan",
  desc:
    "Behind the scenes of Racha, our costume design journey came alive on set — collaborating closely with Global Star Ram Charan to craft powerful looks that matched the film's energy, character depth, and cinematic scale. Each outfit was designed to enhance performance, movement, and visual impact, blending contemporary style with story-driven detailing.",
  img: Achivement1,
},
];

const movies = [
  { title: "Okkadu", year: "2003", tag: "Action Drama" },
  { title: "Varsham", year: "2004", tag: "Romantic Drama" },
  { title: "Pournami", year: "2006", tag: "Classical Dance" },
  { title: "Bommarillu", year: "2006", tag: "Family Drama" },
  { title: "Brindavanam", year: "2010", tag: "Family Romance" },
  { title: "Varudu", year: "2010", tag: "Nandi Award Winner" },
  { title: "Seethamma Vakitlo Sirimalle Chettu", year: "2013", tag: "Family Drama" },
  { title: "Yevadu", year: "2014", tag: "Action Thriller" },
  { title: "MCA", year: "2017", tag: "Action Comedy" },
  { title: "Shatamanam Bhavathi", year: "2017", tag: "Family Drama" },
];

const MoviesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = 320 + 24; // card width + gap
    let scrollPosition = 0;

    const autoScroll = setInterval(() => {
      if (isHovered) return;

      scrollPosition += cardWidth;

      // Reset to start when reaching the end
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [isHovered]);

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Movies We <span className="text-amber-600">Worked On</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm">Auto-scrolling • Swipe to explore →</p>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-6 px-4 md:px-6 scrollbar-hide"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className="flex-shrink-0 w-[calc((100vw-1152px)/2)] hidden lg:block" />

          {movies.map((movie, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.05 }}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-gradient-to-br from-amber-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-100"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {movie.year}
                </span>
                <Film size={20} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 leading-tight">
                {movie.title}
              </h3>
              <div className="text-amber-600 text-sm font-medium">
                {movie.tag}
              </div>
            </motion.div>
          ))}

          <div className="flex-shrink-0 w-[calc((100vw-1152px)/2)] hidden lg:block" />
        </div>

        <div className="absolute left-0 top-0 bottom-6 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-6 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

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

        <MoviesCarousel />
      

      {/* ================= FEATURED IN THE HINDU ================= */}
      <div className="bg-[#faf7f3] py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold mb-4 text-sm">
              📰 Featured In The Hindu
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-amber-600">Itching to Stitch</span>
            </h2>
            <p className="text-gray-600 mt-2 text-base md:text-lg">
              Costume designer Ravi Kumar Pilla says that his work involves much more than sewing buttons and patches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* IMAGE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="relative flex justify-center"
            >
              <div className="hidden md:block absolute -top-6 -left-6 w-20 h-20 border-t-4 border-l-4 border-amber-500 z-20" />
              <div className="hidden md:block absolute -bottom-6 -right-6 w-20 h-20 border-b-4 border-r-4 border-amber-500 z-20" />
              <img
                src={raviKumar}
                alt="Ravi Kumar Pilla - Costume Designer"
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-2xl relative z-10 cursor-zoom-in transition-all duration-300 hover:scale-105"
                onClick={() => setFullscreenImg(raviKumar)}
              />
            </motion.div>

            {/* ARTICLE CONTENT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: 0.2 }}
              className="space-y-4 md:space-y-6"
            >
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                "This industry has always been partial to women because they are either connected to someone influential or they boast of degrees from NIFT or some fashion university. If the producers give us at least half the payment they offer those designers we will come out with stupendous costumes," says <strong>Ravi Kumar Pilla</strong>, costume designer from Pithapuram.
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                He discontinued his studies after standard X due to financial problems and got into Costumes Krishna's workshop as an assistant. While he was in standard V, he started loitering around tailor shops and picked up the craft of stitching. Now he has his own workshop with permanent assistants.
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                After working with actors <strong>Venkatesh, Prabhas</strong>, and producers <strong>Dil Raju, M. S. Raju</strong> and <strong>Puri Jagannadh's</strong> projects, he has been part of major productions like <em>Damarukham, Racha, Seethamma Vakitlo Sirimalle Chettu</em> and more.
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                "I refuse to work if they ask me to design only for the hero or a heroine. I take up the entire film. Our costumes department plays a very crucial role and we have our own self respect."
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                "Director Srikant Addala involved me in his project right from the scripting stage so I have a thorough understanding of the characters and their requirement. I travel to Bangkok, Malaysia and other places to source material for the hero and heroines. I update myself with all the latest in fashion and design."
              </p>

              <div className="pt-4 border-t border-amber-200">
                <p className="text-gray-600 text-sm italic">
                  "Movies have given him everything he wanted — he has had a house constructed for his parents, conducted his sibling's marriage, yet one ambition remains — he wants to direct a film someday."
                </p>
                <a
                  href="https://www.thehindu.com/features/cinema/itching-to-stitch/article2783062.ece"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-amber-600 font-semibold mt-2 text-sm hover:text-amber-700 hover:underline transition"
                >
                  — Read full article on The Hindu →
                </a>
              </div>
            </motion.div>
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
