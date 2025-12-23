import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Scissors, Truck } from "lucide-react";

import homeMen from "../Assets/home/homeMen.png";
import homeWomen from "../Assets/home/homeWomen.jpeg";
import homeWomen1 from "../Assets/home/homeWomen1.png";
import homeKids from "../Assets/home/homeKids.png";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

/* ================= BACKGROUND SLIDESHOW ================= */
const BackgroundSlideshow: React.FC = () => {
  const backgrounds = [homeWomen1, homeMen, homeKids, homeWomen];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % backgrounds.length),
      5000
    );
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {backgrounds.map((bg, i) => (
        <div
          key={i}
          className="hero-bg"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1.2s ease-in-out, transform 6s linear",
            transform: i === index ? "scale(1.03)" : "scale(1)",
            filter: "brightness(1.05) contrast(1.08) saturate(1.1)",
          }}
        />
      ))}

      {/* DOTS */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          right: 24,
          zIndex: 2,
          display: "flex",
          gap: 10,
        }}
      >
        {backgrounds.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              border: "none",
              background: i === index ? "#f7b038" : "rgba(255,255,255,0.6)",
              cursor: "pointer",
              transform: i === index ? "scale(1.3)" : "scale(1)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* ================= MAIN HOME ================= */
const Home: React.FC = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="home"
        style={{
          position: "relative",
          height: "100vh", // 🔒 fixed height
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 5%",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND */}
        <BackgroundSlideshow />

        {/* DARK GRADIENT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.35), rgba(0,0,0,0.15))",
            zIndex: 1,
          }}
        />

        {/* CONTENT */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "720px" }}>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "70px",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: 20,
            }}
          >
            Luxury Styling <br />
            <span style={{ color: "#f7b038" }}>for Every Moment</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: "22px",
              color: "#fff",
              marginBottom: 30,
            }}
          >
            Designed to make every moment unforgettable.
          </motion.p>

          {/* SERVICES */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 22,
              color: "#fff",
            }}
          >
            {[
              "Ethnic Wear",
              "Custom Tailoring",
              "Movie Costumes",
              "Event Styling",
              "Wedding Couture",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    background: "#f7b038",
                    borderRadius: "50%",
                    marginRight: 8,
                  }}
                />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            position: "absolute",
            bottom: 25,
            left: "50%",
            transform: "translateX(-50%)",
            width: 30,
            height: 50,
            border: "2px solid rgba(255,255,255,0.7)",
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            paddingTop: 10,
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: 6,
              height: 12,
              background: "#f7b038",
              borderRadius: 6,
            }}
          />
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section style={{ padding: "90px 5%", background: "#faf7f3" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            style={{
              fontSize: 26,
              fontFamily: "Georgia, serif",
              color: "#f7b038",
              marginBottom: 12,
            }}
          >
            Fine Handcrafted Fashion • Tailored With Soul
          </motion.h3>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            style={{
              fontSize: 48,
              fontWeight: 800,
              marginBottom: 20,
              color: "#2c2c2c",
            }}
          >
            Crafted for Those Who Value Elegance
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              color: "#4a4a4a",
              maxWidth: 850,
              margin: "0 auto",
            }}
          >
           We bring beautifully handcrafted outfits straight to you. Each piece blends traditional artistry with modern style, carefully made and finished by skilled artisans to reflect your unique story.
          </motion.p>

          {/* FEATURES */}
          <div
            style={{
              marginTop: 60,
              display: "flex",
              gap: 40,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                icon: Sparkles,
                title: "Doorstep Design Consultation",
               desc: "We bring the design experience to your home — helping you choose fabrics, explore styling ideas, and create a custom design plan made just for you.",
              },
              {
                icon: Scissors,
                title: "Precision Tailoring",
               desc: "Your outfit is measured, shaped, and crafted with expert care — ensuring the perfect fit, beautiful detailing, and a finish that feels truly personal.",
              },
              {
                icon: Truck,
                title: "Doorstep Delivery",
               desc: "We deliver your outfit to your home and make any final adjustments needed, so you enjoy a perfect, comfortable fit right away.",
              },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  transition={{ delay: i * 0.2 }}
                  style={{
                    background: "#fff",
                    padding: "30px",
                    borderRadius: 20,
                    maxWidth: 330,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: 70,
                      height: 70,
                      margin: "0 auto 20px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg,#ffce3a,#f7b038)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={34} color="#fff" />
                  </div>

                  <h3
                    style={{
                      fontSize: 24,
                      color: "#d48806",
                      marginBottom: 12,
                    }}
                  >
                    {f.title}
                  </h3>

                  <p style={{ color: "#555" }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
