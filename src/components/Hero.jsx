import React, { useEffect } from "react";
import { motion } from "framer-motion";
import profile from "../assets/IMG-20241220-WA0000.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  // Initialize floating animation for the 3D shape
  useEffect(() => {
    const handleMouseMove = (e) => {
      const blob = document.getElementById("blob");
      if (blob) {
        const { clientX, clientY } = e;
        blob.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] bg-center opacity-10 z-0"></div>

      {/* Floating blob effect */}
      <motion.div
        id="blob"
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full filter blur-[100px] opacity-20 z-0"
        initial={{ scale: 0.8 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left mb-16 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block text-gray-800">Hi, I'm</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Md Alamin
              </span>
            </motion.h1>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-4">
                Frontend Developer & UI/UX Designer
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
                I create engaging digital experiences with modern web
                technologies. Passionate about building intuitive interfaces and
                solving complex problems.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="projects">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-indigo-500/30">
                View Projects
              </button></Link>
              <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium py-3 px-8 rounded-full transition duration-300">
                Contact Me
              </button>
            </motion.div>

            <motion.div
              className="flex justify-center md:justify-start space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {["github", "linkedin", "twitter", "dribbble"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                  aria-label={platform}
                >
                  <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
                    <span className="text-xl">
                      {platform === "github"
                        ? "🐙"
                        : platform === "linkedin"
                        ? "👔"
                        : platform === "twitter"
                        ? "🐦"
                        : "🏀"}
                    </span>
                  </div>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Shape */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center">
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-full w-[90%] h-[90%] flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-[80%] h-[80%] flex items-center justify-center">
                    <img
                      src={profile}
                      alt="Md Alamin"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Floating elements around the main shape */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className={`absolute w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl ${
                    i === 1
                      ? "top-0 left-0"
                      : i === 2
                      ? "bottom-0 right-0"
                      : "top-1/2 right-0 transform -translate-y-1/2"
                  }`}
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {i === 1 ? "⚛️" : i === 2 ? "💻" : "🎨"}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-gray-600 mb-2">Scroll down</span>
        <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center p-1">
          <motion.div
            className="w-2 h-2 bg-gray-600 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
