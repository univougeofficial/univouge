import React from "react";
import { motion } from "framer-motion";

// Fabric Images
import Kanchipuram from "../Assets/kanchipuram.png";
import Mulberry from "../Assets/Mulberry.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Fabrics: React.FC = () => {
  const fabrics = [
    {
      name: "Kanchipuram Silk",
      desc:
        "A timeless South Indian masterpiece woven with pure mulberry silk and traditional zari craftsmanship.",
      image: Kanchipuram,
      characteristics: [
        "Three-shuttle weaving technique",
        "Temple border designs with deity motifs",
        "Authentic gold or silver zari threads",
        "Rich, durable texture suitable for heirloom quality",
        "Handcrafted by master artisans of Kanchipuram",
        "Symbol of prestige and traditional elegance",
      ],
    },
    {
      name: "Pure Mulberry Silk",
      desc:
        "A luxurious natural fabric celebrated for its luminous sheen, smooth drape, and unparalleled comfort.",
      image: Mulberry,
      characteristics: [
        "Finest long-strand silk fibers",
        "Natural, radiant luster",
        "Deep dye absorption for lasting vibrancy",
        "Lightweight and breathable all-season comfort",
        "Ideal for flowing silhouettes and tailoring",
        "Soft texture with a premium feel against the skin",
      ],
    },
    
  ];

  return (
    <section id="fabrics" className="bg-white pb-24">

      {/* ========================================== */}
      {/*     TOP INTRO SECTION                      */}
      {/* ========================================== */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="w-full text-center py-24 px-4 bg-gradient-to-b from-white to-amber-50/30"
      >
        <h3 className="text-xl md:text-2xl text-amber-700 font-serif tracking-wide mb-3">
          Heritage • Artistry • Silken Excellence
        </h3>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Signature{" "}
          <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
            Silk Collection
          </span>
        </h1>

        <p className="text-lg md:text-2xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
         Explore silk traditions preserved through generations, 
         woven with care into fabrics that reflect elegance, 
         luxury, and artistic legacy.
        </p>
      </motion.div>

      {/* ========================================== */}
      {/*       FABRIC SECTIONS                      */}
      {/* ========================================== */}
      {fabrics.map((fab, index) => (
        <div key={index} className="mb-32">
          
          {/* ---------------- HERO IMAGE (PARALLAX) ---------------- */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full flex justify-center mb-12"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-6xl group"
              style={{
                height: "600px",
                backgroundImage: `url(${fab.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
               
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500"></div>

              {/* Glass Title Card */}
              <div className="absolute bottom-10 left-10 backdrop-blur-lg bg-white/20 p-6 rounded-2xl max-w-xl shadow-xl border border-white/30">
                <motion.h2
                  initial="hidden"
                  whileInView="show"
                  variants={fadeUp}
                  transition={{ duration: 0.7 }}
                  className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
                >
                  {fab.name}
                </motion.h2>

                <motion.p
                  initial="hidden"
                  whileInView="show"
                  variants={fadeUp}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white/90 text-lg md:text-xl mt-2"
                >
                  {fab.desc}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* ---------------- CHARACTERISTICS CARD ---------------- */}
          <motion.div
            className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-10 border border-amber-100"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-amber-700 mb-6">
              Fabric Highlights
            </h3>

            <ul className="space-y-3 text-gray-700 text-lg">
              {fab.characteristics.map((c, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start"
                >
                  <span className="text-transparent bg-gradient-to-br from-amber-500 to-yellow-600 bg-clip-text text-lg mr-3">
                    ●
                  </span>
                  {c}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      ))}
    </section>
  );
};

export default Fabrics;
