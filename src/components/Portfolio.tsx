import React, { useState, useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";

/* ================= WOMEN ================= */
import Reception from "../Assets/womens/Reception.jpeg";
import womenWedding from "../Assets/womens/wedding/womenWedding.png";
import CH00655 from "../Assets/womens/wedding/CHA00655.jpg";
import womenFestival from "../Assets/womens/festival/womenFestival.png";
import womenParty from "../Assets/womens/party/womenParty.png";

/* ================= MEN ================= */
import menWedding1 from "../Assets/mens/wedding/menWedding1.png";
import menFestival from "../Assets/mens/festival/menFestval.png";
import Ram2 from "../Assets/mens/Ram2.jpeg";
import CHA00250 from "../Assets/mens/CHA00250.jpg";
import menss from "../Assets/mens/festival/menss.jpg"
/* ================= KIDS ================= */
import kid1 from "../Assets/kids/kid1.png";
import kidMen from "../Assets/kids/kidMen.png";
import kidWomen from "../Assets/kids/kidWomen.png";
import kidMenWomen from "../Assets/kids/kidMenWomen.png";

/* ================= TYPES ================= */
type Card = {
  title: string;
  desc: string;
  img: string;
};

/* ================= DATA ================= */
const WOMEN: Card[] = [
  { title: "Bridal Couture", desc: "Timeless silk bridal elegance", img: Reception },
  { title: "Reception Look", desc: "Couple in reception attire", img: CH00655 },
   { title: "Muhurtham Lehenga", desc: "Temple jewelry, ritual styling", img: womenWedding },
  { title: "Festival Silk", desc: "Handloom festive heritage", img: womenFestival },
  { title: "Party Edit", desc: "Modern statement drape", img: womenParty },
];

const MEN: Card[] = [
  { title: "Classic Groom", desc: "Traditional wedding style", img: CHA00250 },
  { title: "Festive Heritage", desc: "imeless festive wear rooted in Indian tradition", img: menFestival },
  { title: "Haldi Ceremony", desc: "Timeless festive styling rooted in tradition", img: menss },
   { title: "Royal Sherwani", desc: "Majestic groom ensemble", img: menWedding1 },
  { title: "Artisan Sketch", desc: "❤️", img: Ram2 },
];

const KIDS: Card[] = [
  { title: "Little Prince", desc: "Festive ethnic wear", img: kidMen },
  { title: "Princess Lehenga", desc: "Traditional kids couture", img: kidWomen },
  { title: "Twin Festive", desc: "Matching celebration outfits", img: kidMenWomen },
  { title: "Kids Celebration", desc: "Playful ethnic styling", img: kid1 },
];

/* ================= ANIMATIONS ================= */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */
const Portfolio: React.FC = () => {
  const [active, setActive] = useState<"women" | "men" | "kids">("women");
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const data = active === "women" ? WOMEN : active === "men" ? MEN : KIDS;

  /* ===== AUTO SCROLL (MOBILE ONLY) ===== */
  useEffect(() => {
  const container = sliderRef.current;
  if (!container) return;

  const isMobile = window.matchMedia("(max-width: 639px)").matches;
  if (!isMobile) return;

  let scrollAmount = container.offsetWidth * 0.9;

  const interval = setInterval(() => {
    // if reached end → go back to start
    if (
      container.scrollLeft + container.offsetWidth >=
      container.scrollWidth - 10
    ) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, 5000); // ⏱ 4s feels smoother on mobile

  return () => clearInterval(interval);
}, [active]);


  return (
  <section id="portfolio" className="bg-[#FAFAF9] py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== TITLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-amber-600">Portfolio</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
         A growing collection of couture for every occasion and celebration.
          </p>
        </motion.div>

        {/* ===== TABS ===== */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {["women", "men", "kids"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab as any)}
              className={`px-7 py-3 rounded-full font-medium transition-all duration-300 ${
                active === tab
                  ? "bg-amber-500 text-white shadow-xl scale-105"
                  : "bg-white border hover:scale-105"
              }`}
            >
              {tab === "women" && "Women's Collection"}
              {tab === "men" && "Men's Collection"}
              {tab === "kids" && "Kids Collection"}
            </button>
          ))}
        </div>

        {/* ===== GRID DESKTOP / AUTO SCROLL MOBILE ===== */}
        <motion.div
          ref={sliderRef}
          key={active}
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="
            flex gap-6 overflow-x-auto pb-4
            snap-x snap-mandatory scrollbar-hide

            sm:grid sm:overflow-visible sm:pb-0
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {data.map((card, idx) => (
            <motion.div
              key={`${active}-${idx}`}
              variants={cardVariants}
              whileHover={{ y: -14, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 130, damping: 18 }}
              className="
                snap-center shrink-0
                w-[85vw] sm:w-auto
                h-[440px]
                rounded-3xl overflow-hidden
                shadow-2xl bg-neutral-900
                cursor-pointer group relative
              "
            >
              <motion.img
                src={card.img}
                alt={card.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
                <p className="text-sm text-white/80 mb-3">{card.desc}</p>
              </div>

              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  background:
                    "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.18), transparent 65%)",
                }}
              />
            </motion.div>
            
          ))}
          
        </motion.div>
        
      </div>
    </section>
  );
};

export default Portfolio;
