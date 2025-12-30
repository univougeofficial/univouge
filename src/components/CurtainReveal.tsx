import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CurtainRevealProps {
  onComplete: () => void;
}

const CurtainReveal: React.FC<CurtainRevealProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"intro" | "particles" | "logo" | "waiting" | "reveal" | "done">("intro");

  // Generate golden particles that converge to center
  const particles = useMemo(() =>
    [...Array(80)].map((_, i) => {
      const angle = (i / 80) * Math.PI * 2;
      const radius = 300 + Math.random() * 400;
      return {
        id: i,
        startX: Math.cos(angle) * radius,
        startY: Math.sin(angle) * radius,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 0.8,
        duration: 1.5 + Math.random() * 1,
      };
    }), []
  );

  // Generate light rays
  // const lightRays = useMemo(() =>
  //   [...Array(16)].map((_, i) => ({
  //     id: i,
  //     rotation: i * 22.5,
  //     delay: i * 0.05,
  //   })), []
  // );

  // Generate floating sparkles
  const sparkles = useMemo(() =>
    [...Array(40)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    })), []
  );

  useEffect(() => {
    const timeline = [
      { phase: "particles" as const, delay: 400 },
      { phase: "logo" as const, delay: 1800 },
      { phase: "waiting" as const, delay: 3800 },
    ];

    const timeouts = timeline.map(({ phase, delay }) =>
      setTimeout(() => setPhase(phase), delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handleReveal = () => {
    setPhase("reveal");
    // Let the rotation animation run for 4 seconds before transitioning
    setTimeout(() => {
      setPhase("done");
    }, 4000);
  };

  useEffect(() => {
    if (phase === "done") {
      onComplete();
    }
  }, [phase, onComplete]);

  const showParticles = phase === "particles" || phase === "logo" || phase === "waiting";
  const showLogo = phase === "logo" || phase === "waiting";
  const showButton = phase === "waiting";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: "#0a0a0a" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Radial gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, #1a1510 0%, #0a0a0a 70%)",
            }}
          />

          {/* Light rays emanating from center */}
          {/* {showParticles && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {lightRays.map((ray) => (
                <motion.div
                  key={ray.id}
                  className="absolute"
                  style={{
                    width: "2px",
                    height: "100vh",
                    background: "linear-gradient(to top, transparent 0%, rgba(212,175,55,0.1) 30%, rgba(212,175,55,0.3) 50%, rgba(212,175,55,0.1) 70%, transparent 100%)",
                    transformOrigin: "center center",
                    transform: `rotate(${ray.rotation}deg)`,
                  }}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{
                    opacity: showLogo ? 0.6 : 0.3,
                    scaleY: 1
                  }}
                  transition={{
                    delay: ray.delay,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          )} */}

          {/* Golden particles converging to center */}
          {showParticles && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    background: "radial-gradient(circle, #ffd700 0%, #d4af37 50%, transparent 100%)",
                    boxShadow: "0 0 6px rgba(212,175,55,0.8)",
                  }}
                  initial={{
                    x: particle.startX,
                    y: particle.startY,
                    opacity: 0,
                    scale: 0.5
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1, 1, 0]
                  }}
                  transition={{
                    delay: particle.delay,
                    duration: particle.duration,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          )}

          {/* Central glow */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 40%, transparent 70%)",
              filter: "blur(40px)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: showLogo ? 1 : 0.3,
              scale: showLogo ? 1.2 : 0.8
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Floating sparkles */}
          {(showLogo || showButton) && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {sparkles.map((sparkle) => (
                <motion.div
                  key={sparkle.id}
                  className="absolute rounded-full"
                  style={{
                    left: `${sparkle.left}%`,
                    top: `${sparkle.top}%`,
                    width: sparkle.size,
                    height: sparkle.size,
                    background: "#ffd700",
                    boxShadow: "0 0 4px rgba(255,215,0,0.8)",
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -30, -60],
                  }}
                  transition={{
                    delay: sparkle.delay,
                    duration: sparkle.duration,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          )}

          {/* Logo and content */}
          <div className="relative z-20 text-center px-6">
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Tagline */}
                  <motion.p
                    className="text-xs md:text-sm uppercase mb-6"
                    style={{
                      letterSpacing: "0.3em",
                      color: "rgba(212,175,55,0.7)",
                      textShadow: "0 0 20px rgba(212,175,55,0.3)",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    An identity is about to be unveiled
                  </motion.p>

                  {/* Brand name with golden glow */}
                  <motion.h1
                    className="mb-4 relative"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "clamp(3.5rem, 8vw, 6rem)",
                      fontWeight: 400,
                      background: "linear-gradient(180deg, #fff8dc 0%, #ffd700 25%, #d4af37 50%, #b8962e 75%, #d4af37 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 0 30px rgba(212,175,55,0.5))",
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                  >
                    Univouge
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    className="mb-8"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                      letterSpacing: "0.15em",
                      color: "rgba(255,248,220,0.8)",
                      textShadow: "0 0 15px rgba(212,175,55,0.2)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    Tradition Styled for the World
                  </motion.p>

                  {/* Decorative line */}
                  <motion.div
                    className="flex items-center justify-center gap-4 mb-10"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    <div
                      className="h-px w-20 md:w-32"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.6))",
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 rotate-45"
                      style={{ background: "rgba(212,175,55,0.8)" }}
                      animate={{
                        boxShadow: ["0 0 5px rgba(212,175,55,0.5)", "0 0 15px rgba(212,175,55,0.8)", "0 0 5px rgba(212,175,55,0.5)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div
                      className="h-px w-20 md:w-32"
                      style={{
                        background: "linear-gradient(270deg, transparent, rgba(212,175,55,0.6))",
                      }}
                    />
                  </motion.div>

                  {/* Enter Button */}
                  {showButton && (
                    <motion.button
                      onClick={handleReveal}
                      className="group relative px-10 py-4 overflow-hidden"
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(212,175,55,0.5)",
                        borderRadius: "2px",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      whileHover={{
                        scale: 1.03,
                        borderColor: "rgba(212,175,55,0.9)",
                        boxShadow: "0 0 30px rgba(212,175,55,0.3), inset 0 0 20px rgba(212,175,55,0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Button shimmer effect */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent)",
                        }}
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />

                      {/* Button text */}
                      <span
                        className="relative z-10 text-sm md:text-base uppercase flex items-center justify-center gap-3"
                        style={{
                          letterSpacing: "0.25em",
                          color: "#d4af37",
                        }}
                      >
                        Enter
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          style={{ color: "#ffd700" }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Vignette effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)",
            }}
          />

          {/* Reveal transition - rotating logo for 30 seconds */}
          {phase === "reveal" && (
            <div className="absolute inset-0 z-50 flex items-center justify-center">
              {/* Outer golden ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: "300px",
                  height: "300px",
                  border: "4px solid #d4af37",
                  boxShadow: "0 0 40px rgba(255,215,0,0.6), inset 0 0 40px rgba(255,215,0,0.2)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  rotate: { duration: 30, ease: "linear", repeat: Infinity }
                }}
              />

              {/* Inner golden ring - opposite direction */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: "260px",
                  height: "260px",
                  border: "2px solid #b8962e",
                  boxShadow: "0 0 20px rgba(255,215,0,0.4)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  rotate: { duration: 20, ease: "linear", repeat: Infinity }
                }}
              />

              {/* Circular text rotating inside */}
              <motion.div
                style={{
                  position: "absolute",
                  width: "220px",
                  height: "220px",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  rotate: { duration: 10, ease: "linear", repeat: Infinity }
                }}
              >
                <svg
                  viewBox="0 0 220 220"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <defs>
                    {/* Top arc path */}
                    <path
                      id="topArc"
                      d="M 30, 110 A 80,80 0 0,1 190,110"
                    />
                    {/* Bottom arc path */}
                    <path
                      id="bottomArc"
                      d="M 190, 110 A 80,80 0 0,1 30,110"
                    />
                    <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fff8dc" />
                      <stop offset="50%" stopColor="#ffd700" />
                      <stop offset="100%" stopColor="#d4af37" />
                    </linearGradient>
                  </defs>
                  {/* Top UNIVOUGE */}
                  <text
                    fill="url(#goldText)"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      filter: "drop-shadow(0 0 8px rgba(255,215,0,0.8))",
                    }}
                  >
                    <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                      *UNIVOUGE*
                    </textPath>
                  </text>
                  {/* Bottom UNIVOUGE */}
                  <text
                    fill="url(#goldText)"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      filter: "drop-shadow(0 0 8px rgba(255,215,0,0.8))",
                    }}
                  >
                    <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
                      *UNIVOUGE*
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Center glow */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: "120px",
                  height: "120px",
                  background: "radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Center "U" logo */}
              <motion.span
                style={{
                  position: "absolute",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "3rem",
                  fontWeight: 600,
                  background: "linear-gradient(180deg, #fff8dc 0%, #ffd700 50%, #d4af37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(255,215,0,0.8))",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                U
              </motion.span>

              {/* Floating sparkles around the logo */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: "4px",
                    height: "4px",
                    background: "#ffd700",
                    boxShadow: "0 0 8px rgba(255,215,0,0.8)",
                  }}
                  animate={{
                    x: [
                      Math.cos((i / 8) * Math.PI * 2) * 100,
                      Math.cos((i / 8) * Math.PI * 2 + 0.5) * 120,
                      Math.cos((i / 8) * Math.PI * 2) * 100,
                    ],
                    y: [
                      Math.sin((i / 8) * Math.PI * 2) * 100,
                      Math.sin((i / 8) * Math.PI * 2 + 0.5) * 120,
                      Math.sin((i / 8) * Math.PI * 2) * 100,
                    ],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CurtainReveal;
