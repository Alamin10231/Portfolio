import React, { useState, useEffect } from "react";
import profile from "../assets/IMG-20241220-WA0000.jpg";
import { Link } from "react-router-dom";
import Md_Alamin_Resume from "../assets/Alamin_MERN_Resume.pdf";

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const jobTitles = [
    "Frontend Developer",
    "MERN Stack Developer",
    "Junior Web Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className=" flex items-center 
 
     py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1 z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-nowrap">
              <span
                className="bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 bg-clip-text text-transparent 
                bg-[length:200%_auto] animate-gradient-shine"
              >
                Md Alamin
              </span>
              <br />
              <span
                key={currentTitleIndex}
                className="text-3xl md:text-4xl font-semibold text-gray-300 mt-4 inline-block overflow-hidden 
                border-r-2 border-r-white pr-2 animate-typing"
                style={{
                  animationDuration: `${
                    jobTitles[currentTitleIndex].length * 0.1
                  }s`,
                }}
              >
                {jobTitles[currentTitleIndex]}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12 max-w-2xl leading-relaxed">
              Crafting pixel-perfect web experiences with modern technologies.
              Transforming complex ideas into intuitive digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
  <Link to="/contact" className="w-full sm:w-[220px]">
    <div
      className="relative inline-flex w-full items-center justify-center px-8 py-4 text-center font-bold text-white 
      transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:scale-105 
      hover:shadow-xl hover:shadow-blue-500/30 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2 group-hover:animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <span className="relative z-10">Contact Me</span>
    </div>
  </Link>

  <a
    href={Md_Alamin_Resume}
    download={Md_Alamin_Resume.pdf}
    className="w-full sm:w-[220px] inline-flex items-center justify-center px-8 py-4 text-center font-medium text-white 
    transition-all duration-300 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 
    hover:to-purple-500 hover:shadow-purple-500/20 hover:shadow-xl group"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2 group-hover:animate-bounce"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
    <span>Get Resume</span>
  </a>
</div>


            {/* Social Links */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
  <a
    href="https://github.com/Alamin10231"
    className="p-3 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
  >
    <svg
      className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  </a>

  <a
    href="https://www.linkedin.com/in/me/"
    className="p-3 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
  >
    <svg
      className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  </a>

  <a
    href="mailto:alamin3636md@gmail.com"
    className="p-3 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
  >
    <svg
      className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 12.713l-11.985-7.713v13.544c0 .246.036.481.098.703l7.887-7.307 4 2.571 4-2.571 7.887 7.307c.062-.222.098-.457.098-.703v-13.544l-11.985 7.713zm11.985-9.57c0-.91-.738-1.65-1.65-1.65h-20.67c-.912 0-1.65.74-1.65 1.65v1.722l12 7.726 12-7.726v-1.722z" />
    </svg>
  </a>

  <a
    href="https://www.facebook.com/md.alamin.hossain.240801/"
    className="p-3 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
  >
    <svg
      className="w-8 h-8 text-blue-500 group-hover:text-blue-400 transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.656 9.128 8.438 9.878v-6.985h-2.54v-2.893h2.54v-2.205c0-2.507 1.492-3.89 3.774-3.89 1.095 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.776-1.63 1.57v1.87h2.773l-.443 2.893h-2.33v6.985c4.782-.75 8.438-4.887 8.438-9.878z" />
    </svg>
  </a>

  <a
    href="https://wa.me/01600224052"
    className="p-3 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
  >
    <svg
      className="w-8 h-8 text-green-500 group-hover:text-green-400 transition-colors"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.943C.058 5.423 5.494 0 12.029 0c3.184-.003 6.188 1.238 8.441 3.487 2.25 2.249 3.492 5.252 3.488 8.436-.004 6.536-5.423 11.97-12.006 11.97h-.004c-1.99 0-3.947-.398-5.758-1.181l-6.133 1.288zm6.997-3.988l.438.257c1.554.914 3.304 1.396 5.135 1.396h.003c5.45 0 9.885-4.429 9.889-9.867.002-2.637-1.027-5.111-2.894-6.976C17.79 3.99 15.316 2.963 12.68 2.965c-5.437 0-9.865 4.433-9.865 9.884-.002 1.785.47 3.534 1.372 5.076l.288.487-1.038 3.791 3.818-1.008zM8.69 7.804c-.317-.707-.65-.721-.954-.734-.247-.01-.528-.01-.81-.01s-.74.106-1.126.53c-.387.423-1.477 1.44-1.477 3.513s1.512 4.082 1.722 4.366c.21.282 2.957 4.704 7.307 6.41 3.608 1.425 4.34 1.14 5.119 1.066.78-.075 2.525-1.033 2.88-2.033.356-1.001.356-1.862.249-2.033-.106-.21-.387-.317-.81-.555s-2.525-1.248-2.915-1.39c-.39-.143-.676-.21-.954.21-.278.423-1.095 1.39-1.344 1.668-.25.28-.495.317-.908.106-.412-.21-1.74-.642-3.313-2.046-1.224-1.089-2.048-2.436-2.285-2.85-.236-.415-.024-.638.183-.845.187-.187.412-.488.617-.732.202-.24.269-.414.403-.662.135-.25.067-.497-.04-.69-.106-.194-.954-2.387-1.308-3.248z" />
    </svg>
  </a>
</div>

          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2 relative group">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto overflow-hidden border-8 border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
                <img
                  src={profile}
                  alt="Md Alamin"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
