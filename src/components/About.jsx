import React from "react";
import "animate.css";
import Alamin from "../assets/IMG-20241220-WA0000.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32  text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative group animate__animated animate__bounceInLeft">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full max-w-md mx-auto">
              <div className="rounded-xl overflow-hidden border-8 border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-500/20">
                <img
                  src={Alamin}
                  alt="Md Alamin"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="text-left animate__animated animate__fadeInRight animate__ease-in-out">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 bg-clip-text text-transparent 
                bg-[length:200%_auto] animate-gradient-shine">
                About Me
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
              I am <span className="text-blue-400 font-semibold">Md Alamin</span>, a passionate MERN Stack Developer who loves building modern web applications. 
              I specialize in crafting high-performance, scalable, and intuitive digital solutions. My expertise lies in frontend and backend development, 
              ensuring seamless user experiences.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Tailwind CSS",
                "Firebase",
                "Git & GitHub",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 px-4 py-3 text-center rounded-xl font-semibold text-gray-200 
                  transition-transform duration-300 transform hover:scale-105 shadow-md shadow-purple-500/20 animate__animated animate__bounceIn"
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold px-8 py-4 rounded-xl 
                hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/30 animate__animated animate__bounce"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
