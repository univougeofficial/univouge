import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* MEN */
import MaheshWedding from "../Assets/mens/maheshWedding.jpg";
import PrabhasAnushka from "../Assets/mens/prabhasAnushka.jpg";

/* WOMEN */
import Reception from "../Assets/womens/Reception.jpeg";
import wedding from "../Assets/womens/wedding.jpg";
import CH00655 from "../Assets/womens/wedding/CHA00655.jpg";
import CH00153 from "../Assets/mens/CHA01153.jpg";
import CHA00250 from "../Assets/mens/CHA00250.jpg";
import Ram2 from "../Assets/mens/Ram2.jpeg";
import party2 from "../Assets/womens/party2.jpeg";
import event4 from "../Assets/womens/event4.jpeg";
import womenWedding from "../Assets/womens/wedding/womenWedding.png";

/* ================= KIDS ================= */
import kid1 from "../Assets/kids/kid1.png";
import kidMen from "../Assets/kids/kidMen.png";
import kidWomen from "../Assets/kids/kidWomen.png";
import kidMenWomen from "../Assets/kids/kidMenWomen.png";

/* ================= MEN – WEDDING ================= */
import menWedding from "../Assets/mens/wedding/menWedding.png";
import menWedding1 from "../Assets/mens/wedding/menWedding1.png";



/* ================= MEN – FESTIVAL ================= */
import menFestival from "../Assets/mens/festival/menFestval.png";
import menFestival1 from "../Assets/mens/festival/menFestival1.png";
import menFestival2 from "../Assets/mens/festival/menFestival2.png";
import menFestival3 from "../Assets/mens/festival/menFestival3.png";

/* ================= WOMEN – BIRTHDAY ================= */
import womenBirthday from "../Assets/womens/birthday/womenBirthday.png";
import womenBirthday1 from "../Assets/womens/birthday/womenBirthday1.png";
import womenBirthday2 from "../Assets/womens/birthday/womenBirthday2.png";
import womenBirthday3 from "../Assets/womens/birthday/womenBirthday3.png";

/* ================= WOMEN – FESTIVAL ================= */
import womenFestival from "../Assets/womens/festival/womenFestival.png";
import womenFestival1 from "../Assets/womens/festival/womenFestival1.png";
import womenFestival2 from "../Assets/womens/festival/womenFestival2.png";
import womenFestival3 from "../Assets/womens/festival/womenFestival3.png";

/* ================= WOMEN – HALF SAREE ================= */
import womenHalfsaree from "../Assets/womens/halfsaree/womenHalfsaree.png";
import womenHalfsaree1 from "../Assets/womens/halfsaree/womenHalfsaree1.png";
import womenHalfsaree2 from "../Assets/womens/halfsaree/womenHalfsaree2.png";
import womenHalfsaree3 from "../Assets/womens/halfsaree/womenHalfsaree3.jpeg";

/* ================= WOMEN – PARTY ================= */
import womenParty from "../Assets/womens/party/womenParty.png";
import womenParty1 from "../Assets/womens/party/womenParty1.png";


/* KIDS */
import Ram from "../Assets/Ram.png"
// /* COMMON / EXTRA */
// WOMEN IMAGES





/* ==========================================================
   AVAILABLE CATEGORIES
========================================================== */
const CATEGORIES = ["All", "Wedding", "Half Saree","Birthday", "Festival", "Party" ];

/* Women → All = 20 items | Men → All = 16 items */
const WOMEN_ALL = ["Wedding", "Birthday", "Festival","Party"];
const MEN_ALL = ["Wedding", "Birthday", "Festival", "Party"];

/* ==========================================================
   DATASET
========================================================== */
type CardItem = {
  title: string;
  desc?: string;
  img?: string;
  category?: string;
  collection: "women" | "men" | "kids";
  isVideo?: boolean;
};
const DATA: CardItem[] = [
  /* ================= WOMEN — WEDDING ================= */
  { title: "Bridal Couture", desc: "Silk bridal elegance", img: Reception, category: "Wedding", collection: "women" },
  { title: "Muhurtham Saree", desc: "Traditional Kanchipuram look", img: womenWedding, category: "Wedding", collection: "women" },
  { title: "Reception Look", desc: "Evening ceremonial wear", img: CH00655, category: "Wedding", collection: "women" },
  { title: "Designer Bridal Set", desc: "Rich zari detailing", img: CH00153, category: "Wedding", collection: "women" },

  /* ================= WOMEN — BIRTHDAY ================= */
 {
  title: "Birthday Glam",
  desc: "Modern celebration style",
  img: womenBirthday,
  category: "Birthday",
  collection: "women",
},
{
  title: "Elegant Party Saree",
  desc: "Soft pastel elegance",
  img: womenBirthday1,
  category: "Birthday",
  collection: "women",
},
{
  title: "Designer Lehenga",
  desc: "Statement birthday wear",
  img: womenBirthday2,
  category: "Birthday",
  collection: "women",
},
{
  title: "Contemporary Ethnic",
  desc: "Chic festive drape",
  img: womenBirthday3,
  category: "Birthday",
  collection: "women",
},

  /* ================= WOMEN — FESTIVAL ================= */
 {
  title: "Temple Silk",
  desc: "Traditional festive wear",
  img: womenFestival,
  category: "Festival",
  collection: "women",
},
{
  title: "Heritage Saree",
  desc: "Cultural elegance",
  img: womenFestival1,
  category: "Festival",
  collection: "women",
},
{
  title: "Classic Pattu",
  desc: "Handloom artistry",
  img: womenFestival2,
  category: "Festival",
  collection: "women",
},
{
  title: "Divine Festive Look",
  desc: "Ritual-ready styling",
  img: womenFestival3,
  category: "Festival",
  collection: "women",
},

  /* ================= WOMEN — EVENTS ================= */
  // { title: "Red Carpet Saree", desc: "Celebrity event couture", img: MalvikaMohan , category: "Events", collection: "women" },
  // { title: "Award Night Look", desc: "Luxury woven silk", img: KayaduLohar, category: "Events", collection: "women" },
  // { title: "Designer Fusion Sari", desc: "Elegant evening fashion", img: KalyaniiPriyadarshani, category: "Events", collection: "women" },
  // { title: "Celebrity Evening Set", desc: "Premium styling", img: KayaduLohar, category: "Events", collection: "women" },

  /* ================= WOMEN — PARTY ================= */
  {
  title: "Modern Party Saree",
  desc: "Evening elegance",
  img: womenParty,
  category: "Party",
  collection: "women",
},
{
  title: "Celebrity Party Look",
  desc: "Premium draping style",
  img: womenParty1,
  category: "Party",
  collection: "women",
},

  { title: "Celebrity Party Style", desc: "Premium draping", img: party2 , category: "Party", collection: "women" },
  { title: "Elegant Sari", desc: "Soft tone evening wear", img: event4, category: "Party", collection: "women" },

  /* ================= WOMEN — HALF SAREE ================= */
  {
  title: "Langa Voni Classic",
  desc: "Traditional half saree",
  img: womenHalfsaree,
  category: "Half Saree",
  collection: "women",
},
{
  title: "Designer Pattu Langa",
  desc: "Modern silk styling",
  img: womenHalfsaree1,
  category: "Half Saree",
  collection: "women",
},
{
  title: "Festive Half Saree",
  desc: "Youthful ethnic wear",
  img: womenHalfsaree2,
  category: "Half Saree",
  collection: "women",
},
{
  title: "Heritage Half Saree",
  desc: "Cultural elegance",
  img: womenHalfsaree3,
  category: "Half Saree",
  collection: "women",
},

  /* ================= MEN — WEDDING ================= */
  { title: "Royal Sherwani", desc: "Majestic groom wear", img: menWedding1, category: "Wedding", collection: "men" },
  { title: "Mahesh Wedding Look", desc: "Premium silk sherwani", img: CHA00250, category: "Wedding", collection: "men" },
  { title: "Prabhas Traditional", desc: "Cultural dhoti set", img: menWedding , category: "Wedding", collection: "men" },
  { title: "Celebrity Groom Style", desc: "Elegant ethnic wear", img: Ram2, category: "Wedding", collection: "men" },

  /* ================= MEN — BIRTHDAY ================= */
  { title: "Men's Birthday Set", desc: "Simple festive style", img: Ram, category: "Birthday", collection: "men" },
  { title: "Formal Birthday Look", desc: "Premium event fashion", img: MaheshWedding, category: "Birthday", collection: "men" },
  { title: "Celebrity Casual", desc: "Stylish comfort wear", img: PrabhasAnushka , category: "Birthday", collection: "men" },
  { title: "Royal Celebration", desc: "Classy birthday outfit", img: Ram, category: "Birthday", collection: "men" },

  /* ================= MEN — FESTIVAL ================= */
  { title: "Silk Veshti", desc: "Traditional ethnic wear", img: menFestival , category: "Festival", collection: "men" },
  { title: "Cultural Sherwani", desc: "Festival-ready style", img: menFestival1, category: "Festival", collection: "men" },
  { title: "Classic Veshti Look", desc: "Cultural South Indian wear", img: menFestival2, category: "Festival", collection: "men" },
  { title: "Temple Festival Style", desc: "Handcrafted traditions", img: menFestival3, category: "Festival", collection: "men" },

  /* ================= MEN — PARTY ================= */
  { title: "Evening Party Wear", desc: "Men's modern style", img: PrabhasAnushka, category: "Party", collection: "men" },
  { title: "Cocktail Blazer Look", desc: "High fashion menswear", img: Ram, category: "Party", collection: "men" },
  { title: "Elite Party Style", desc: "Celebrity event look", img: PrabhasAnushka , category: "Party", collection: "men" },
  { title: "Modern Groom Fit", desc: "Stylish evening outfit", img: MaheshWedding, category: "Party", collection: "men" },

  /* ================= KIDS ================= */
  { title: "Little Prince", desc: "Festive kids wear", img: kidMen, category: "Festival", collection: "kids" },
  { title: "Princess Lehenga", desc: "Kids ethnic fashion", img: kidWomen, category: "Festival", collection: "kids" },
  { title: "Festive Kids Saree", desc: "Traditional design", img: kidMenWomen, category: "Festival", collection: "kids" },
   { title: "Festive Kids Saree", desc: "Traditional design", img: kid1, category: "Festival", collection: "kids" },
  
];
/* ==========================================================
   HELPERS
========================================================== */

const takeExact = (items: CardItem[], n: number): CardItem[] => {
  if (items.length === 0) return [];
  if (items.length >= n) return items.slice(0, n);

  const repeated: CardItem[] = [];
  let i = 0;
  while (repeated.length < n) {
    repeated.push(items[i % items.length]);
    i++;
  }
  return repeated;
};

const buildAll = (collection: "women" | "men", groups: string[]) => {
  const out: CardItem[] = [];
  groups.forEach((cat) => {
    const categoryItems = DATA.filter((d) => d.collection === collection && d.category === cat);
    const fallback = DATA.filter((d) => d.collection === collection);
    out.push(...takeExact(categoryItems.length ? categoryItems : fallback, 4));
  });
  return out;
};

/* ==========================================================
   MAIN COMPONENT
========================================================== */

const Portfolio: React.FC = () => {
  const [activeCollection, setActiveCollection] = useState<"women" | "men" | "kids">("women");
  const [activeCategory, setActiveCategory] = useState("Wedding");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  let items: CardItem[] = [];

  // KIDS mode
if (activeCollection === "kids") {
  const kids = DATA.filter((d) => d.collection === "kids");
  items = takeExact(kids, 4);
}


  // WOMEN or MEN
  else {
    if (activeCategory === "All") {
      items =
        activeCollection === "women"
          ? buildAll("women", WOMEN_ALL)
          : buildAll("men", MEN_ALL);
    } else {
      const pool = DATA.filter(
        (d) => d.collection === activeCollection && d.category === activeCategory
      );
      const fallback = DATA.filter((d) => d.collection === activeCollection);
      items = takeExact(pool.length ? pool : fallback, 4);
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-5xl font-bold text-center mb-4">
          Our <span className="text-amber-600">Portfolio</span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Transform your style — and rediscover your confidence.
        </p>

        {/* TABS */}
        <div className="flex justify-center gap-6 my-6">
          {["women", "men", "kids"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveCollection(tab as any);
                setActiveCategory(tab === "kids" ? "All" : "Wedding");
              }}
              className={`px-6 py-3 rounded-full font-medium shadow ${
                activeCollection === tab
                  ? "bg-amber-500 text-white"
                  : "bg-white border"
              }`}
            >
              {tab === "women" && "Women's Collection"}
              {tab === "men" && "Men's Collection"}
              {tab === "kids" && "Kids Collection"}
            </button>
          ))}
        </div>

        {/* CATEGORY CHIPS — hidden for kids */}
        {activeCollection !== "kids" && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map((cat) => {
              if (activeCollection === "men" && cat === "Half Saree") return null;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    activeCategory === cat
                      ? "bg-amber-500 text-white"
                      : "bg-gray-100 border"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* GRID */}
        <AnimatePresence mode="popLayout">
          <div className={`grid md:grid-cols-4 gap-8`}>
            {items.map((card, idx) => {
              const isVideo = card.isVideo && activeCollection === "kids";

              return (
                <motion.div
                  key={`${card.title}-${idx}-${activeCategory}-${activeCollection}`}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: idx * 0.08,
                  }}
                  whileHover={{
                    rotateX: -6,
                    rotateY: 6,
                    scale: 1.04,
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setHoverIndex(idx)}
                  onHoverEnd={() => setHoverIndex(null)}
                  className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                >
                  {/* VIDEO CARD */}
                  {isVideo ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-200 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 to-green-500 flex items-center justify-center text-white text-3xl shadow-xl">
                        ▶
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* ROTATING GOLD BORDER */}
                      <motion.div
                        animate={
                          hoverIndex === idx
                            ? { rotate: 360, opacity: 1 }
                            : { opacity: 0 }
                        }
                        transition={{
                          rotate: {
                            repeat: Infinity,
                            duration: 3,
                            ease: "linear",
                          },
                          opacity: { duration: 0.25 },
                        }}
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: 16,
                          border: "3px dashed rgba(245,181,68,0.95)",
                          pointerEvents: "none",
                        }}
                      />

                      {/* BACKGROUND */}
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${card.img})` }}
                      />

                      {/* DARK OVERLAY */}
                      <motion.div
                        className="absolute inset-0 bg-black/25"
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.45)" }}
                      />

                      {/* TOP BADGE */}
                      <div className="absolute top-4 left-4 text-white text-xs font-semibold">
                        <span className="bg-amber-500 px-3 py-1 rounded-full">
                          {card.category}
                        </span>
                      </div>

                      {/* BOTTOM TITLE */}
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <span className="bg-emerald-700 px-3 py-1 rounded-full text-sm font-semibold shadow">
                          {card.title}
                        </span>
                        <p className="text-sm mt-2 text-white/80">{card.desc}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
