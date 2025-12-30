import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Scissors, Truck } from "lucide-react";

/* ================= IMAGES ================= */
// Desktop images
import homeWomenDesktop from "../Assets/home/homeWomen2.jpg";
import homeWomennDesktop from "../Assets/home/homeWomenn.png";
import homeMenDesktop from "../Assets/home/homeMen1.png";
import homeKidDesktop from "../Assets/home/homeKid.png";

// Mobile images
import homeWomenMobile from "../Assets/home/homeMobileW.jpg";
import homeMobileW2 from "../Assets/home/homeMobileW2.jpeg";
import homeMenMobile from "../Assets/home/homeMobileM.png";
import homeKidMobile from "../Assets/home/homeMobileKid.png";

/* ================= ANIMATIONS ================= */
const fadeUpDesktop = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const slideUpMobile = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};



/* ================= BACKGROUND SLIDESHOW ================= */
const BackgroundSlideshow: React.FC = () => {
  const desktopBackgrounds = [
    homeWomenDesktop,
    homeWomennDesktop,
    homeMenDesktop,
    homeKidDesktop,
  ];

  const mobileBackgrounds = [
    homeWomenMobile,
    homeMobileW2,
    homeMenMobile,
    homeKidMobile,
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const backgrounds = isMobile ? mobileBackgrounds : desktopBackgrounds;

  // Preload next image
  useEffect(() => {
    const nextIndex = (index + 1) % backgrounds.length;
    if (!loadedImages.has(nextIndex)) {
      const img = new Image();
      img.src = backgrounds[nextIndex];
      img.onload = () => {
        setLoadedImages(prev => {
          const newSet = new Set(Array.from(prev));
          newSet.add(nextIndex);
          return newSet;
        });
      };
    }
  }, [index, backgrounds, loadedImages]);

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
        backgroundColor: "#1a1a1a",
      }}
    >
      {backgrounds.map((bg, i) =>
        isMobile ? (
          <img
            key={i}
            src={bg}
            alt="background"
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              opacity: i === index ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
            }}
          />
        ) : (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              opacity: i === index ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
            }}
          />
        )
      )}
    </div>
  );
};

/* ================= MAIN HOME ================= */
const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="home"
        style={{
          position: "relative",
          height: isMobile ? "85vh" : "100vh",
          minHeight: isMobile ? "520px" : "600px",
          width: "100%",
          display: "flex",
          alignItems: isMobile ? "flex-end" : "center",
          padding: isMobile ? "0 6% 60px" : "0 5%",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND */}
        <BackgroundSlideshow />

        {/* BASE OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.25)",
            zIndex: 1,
          }}
        />

        {/* MOBILE BOTTOM GRADIENT */}
        {isMobile && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.05) 70%)",
              zIndex: 1,
            }}
          />
        )}

        {/* CONTENT */}
        <motion.div
          variants={isMobile ? slideUpMobile : fadeUpDesktop}
          initial="hidden"
          animate="show"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "720px",
            width: "100%",
          }}
        >
          <motion.h1
            style={{
              fontSize: isMobile
                ? "clamp(26px, 7vw, 40px)"
                : "clamp(36px, 8vw, 70px)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: isMobile ? "10px" : "16px",
            }}
          >
            Luxury Styling <br />
            <span style={{ color: "#f7b038" }}>for Every Moment</span>
          </motion.h1>

          <motion.p
            style={{
              fontSize: isMobile
                ? "clamp(14px, 4vw, 18px)"
                : "clamp(16px, 4vw, 22px)",
              color: "#fff",
              marginBottom: isMobile ? "16px" : "24px",
              lineHeight: 1.4,
            }}
          >
            Designed to make every moment unforgettable.
          </motion.p>

          {/* SERVICES */}
          <motion.div
            variants={isMobile ? slideUpMobile : fadeUpDesktop}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: isMobile ? 10 : 22,
              color: "#fff",
              fontSize: isMobile ? "12px" : "inherit",
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
                    width: isMobile ? 8 : 10,
                    height: isMobile ? 8 : 10,
                    background: "#f7b038",
                    borderRadius: "50%",
                    marginRight: isMobile ? 6 : 8,
                  }}
                />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ================= INTRO SECTION (UNCHANGED) ================= */}
      <section style={{ padding: "90px 5%", background: "#faf7f3" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <motion.h3
            variants={fadeUpDesktop}
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
            variants={fadeUpDesktop}
            initial="hidden"
            whileInView="show"
            style={{
              fontSize: 48,
              fontWeight: 800,
              marginBottom: 20,
              color: "#2c2c2c",
            }}
          >
            Custom Costume Design for Every Grand Moment
          </motion.h2>

          <motion.p
            variants={fadeUpDesktop}
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
            We bring beautifully handcrafted outfits straight to you — blending
            traditional artistry with modern elegance, crafted with care to
            reflect your unique story.
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
                desc: "We bring the design experience to your home — helping you choose fabrics, explore styling ideas, and create a custom design plan made just for you."              },
              {
                icon: Scissors,
                title: "Precision Tailoring",
                desc: "Your outfit is measured, shaped, and crafted with expert care — ensuring the perfect fit, beautiful detailing, and a finish that feels truly personal.",              },
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
                  variants={fadeUpDesktop}
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

                  <h3 style={{ fontSize: 24, color: "#d48806" }}>
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