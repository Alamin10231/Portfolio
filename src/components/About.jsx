// import React from "react";
// import "animate.css";
// import Alamin from "../assets/IMG-20241220-WA0000.jpg";

// const About = () => {
//   return (
//     <section id="about" className="py-24 md:py-32  text-white ">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Image */}
//           <div className="  group animate__animated animate__bounceInLeft">
//             <div
//               className="
//             absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-3xl
//             opacity-30 animate-pulse"
//             ></div>
//             <div className="relative w-full max-w-md mx-auto">
//               <div className="rounded-xl overflow-hidden border-8 border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-500/20">
//                 <img
//                   src={Alamin}
//                   alt="Md Alamin"
//                   className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Side - About Content */}
//           <div
//             className="  text-left 
//          group animate__animated animate__bounceInLeft
//           "
//           >
//             <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
//               <span
//                 className="bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 bg-clip-text text-transparent
//                 bg-[length:200%_auto] animate-gradient-shine"
//               >
//                 About Me
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
//               I am{" "}
//               <span className="text-blue-400 font-semibold">Md Alamin</span>, a
//               passionate MERN Stack Developer who loves building modern web
//               applications. I specialize in crafting high-performance, scalable,
//               and intuitive digital solutions. My expertise lies in frontend and
//               backend development, ensuring seamless user experiences.
//             </p>

//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
//               {[
//                 "HTML",
//                 "CSS",
//                 "JavaScript",
//                 "React",
//                 "Node.js",
//                 "MongoDB",
//                 "Express.js",
//                 "Tailwind CSS",
//                 "Firebase",
//                 "Git & GitHub",
//               ].map((skill, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-800 px-4 py-3 text-center rounded-xl font-semibold text-gray-200
//                   transition-transform duration-300 transform hover:scale-105 shadow-md shadow-purple-500/20 animate__animated animate__bounceIn"
//                 >
//                   {skill}
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8">
//               <a
//                 href="/contact"
//                 className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold px-8 py-4 rounded-xl
//                 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/30 animate__animated animate__bounce"
//               >
//                 Contact Me
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// src/components/About.jsx



// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';

// const About = () => {
//   // Skills data
//   const skills = [
//     { name: "React", level: 90, icon: <FaReact className="text-blue-500" /> },
//     { name: "Node.js", level: 85, icon: <FaNodeJs className="text-green-600" /> },
//     { name: "MongoDB", level: 80, icon: <FaDatabase className="text-green-500" /> },
//     { name: "Express", level: 85, icon: <span className="text-gray-800 font-bold">E</span> },
//     { name: "JavaScript", level: 95, icon: <span className="text-yellow-400 font-bold">JS</span> },
//     { name: "Tailwind CSS", level: 90, icon: <span className="text-cyan-500 font-bold">T</span> },
//   ];

//   // Experience data
//   const experiences = [
//     { year: "2023-Present", role: "Frontend Developer", company: "Tech Innovations" },
//     { year: "2021-2023", role: "Web Developer", company: "Digital Solutions" },
//     { year: "2020-2021", role: "Junior Developer", company: "StartUp Labs" },
//   ];

//   return (
//     <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             About Me
//           </h2>
//           <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full" />
//         </motion.div>

//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           {/* Left Column - Profile Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="lg:w-1/3 flex justify-center"
//           >
//             <div className="relative">
//               <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10">
//                 <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full" />
//               </div>
              
//               <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse" />
//               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
              
//               <motion.div
//                 className="absolute top-0 -right-8 bg-white shadow-lg rounded-lg p-4 z-20"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.5, duration: 0.5 }}
//               >
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
//                   <span className="text-sm font-medium text-gray-700">Available for work</span>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right Column - Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="lg:w-2/3"
//           >
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               Full Stack Developer with Passion for Building Digital Experiences
//             </h3>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <p className="text-gray-700 mb-6 leading-relaxed">
//                   I'm a passionate web developer with 5+ years of experience creating modern web applications. 
//                   My expertise includes React, Node.js, and modern CSS frameworks like Tailwind CSS.
//                 </p>
                
//                 <p className="text-gray-700 mb-8 leading-relaxed">
//                   I specialize in building responsive, performant web applications with intuitive user interfaces. 
//                   My approach combines technical excellence with creative problem-solving to deliver exceptional digital experiences.
//                 </p>
                
//                 <div className="flex flex-wrap gap-4 mb-8">
//                   <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 shadow-md shadow-indigo-500/30">
//                     Download CV
//                   </button>
//                   <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium py-2 px-6 rounded-full transition duration-300">
//                     Contact Me
//                   </button>
//                 </div>
//               </div>
              
//               <div>
//                 {/* Skills */}
//                 <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <FaTools className="mr-2 text-indigo-600" /> Technical Skills
//                 </h4>
                
//                 <div className="space-y-4 mb-8">
//                   {skills.map((skill, index) => (
//                     <div key={index}>
//                       <div className="flex justify-between mb-1">
//                         <div className="flex items-center">
//                           <div className="mr-2 text-lg">{skill.icon}</div>
//                           <span className="font-medium text-gray-800">{skill.name}</span>
//                         </div>
//                         <span className="text-sm text-gray-600">{skill.level}%</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <motion.div 
//                           className="bg-indigo-600 h-2 rounded-full"
//                           initial={{ width: 0 }}
//                           whileInView={{ width: `${skill.level}%` }}
//                           transition={{ duration: 1, delay: 0.2 * index }}
//                           viewport={{ once: true }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             {/* Experience Timeline */}
//             <div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-4">Work Experience</h4>
//               <div className="relative">
//                 {/* Timeline bar */}
//                 <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
                
//                 <div className="space-y-6 ml-12">
//                   {experiences.map((exp, index) => (
//                     <motion.div 
//                       key={index}
//                       initial={{ opacity: 0, x: 20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5, delay: 0.2 * index }}
//                       viewport={{ once: true }}
//                       className="relative"
//                     >
//                       <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
//                         <div className="w-2 h-2 bg-white rounded-full"></div>
//                       </div>
//                       <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
//                         <span className="text-indigo-600 font-medium">{exp.year}</span>
//                         <h5 className="text-lg font-semibold text-gray-900 mt-1">{exp.role}</h5>
//                         <p className="text-gray-600">{exp.company}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;





// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaLightbulb, FaBook } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column - Profile Image and Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex flex-col items-center"
          >
            <div className="relative mb-8">
              <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full flex items-center justify-center">
                  <FaGraduationCap className="text-6xl text-gray-400" />
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
            </div>
            
            {/* Quote */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8 relative">
              <div className="absolute top-4 left-4 text-4xl text-indigo-500 opacity-20">❝</div>
              <p className="text-gray-700 italic relative z-10">
                "I believe great code should be beautiful, readable, and solve real problems."
              </p>
            </div>
            
            {/* Education */}
            <div className="w-full bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FaGraduationCap className="mr-2 text-indigo-600" /> Education
              </h3>
              
              <div className="relative pl-6 border-l-2 border-indigo-200">
                <div className="absolute left-[-7px] top-0 w-3 h-3 rounded-full bg-indigo-500"></div>
                <h4 className="text-lg font-medium text-gray-800">Green University of Bangladesh</h4>
                <p className="text-gray-600">Feb 2025 - Running</p>
                <p className="text-gray-700 mt-1">B.Sc in Computer Science and Engineering</p>
                <p className="text-indigo-600 font-medium mt-1">CGPA: 2.46</p>
              </div>
            </div>
            
            {/* Interests */}
            <div className="w-full bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FaLightbulb className="mr-2 text-yellow-500" /> Personal Interests
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FaBook className="text-indigo-600 mr-2" />
                  <span>Learning New Technologies</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span>Problem Solving</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <span>Reading Tech Blogs</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Background & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">My Background & Expertise</h3>
                <div className="w-16 h-1 bg-indigo-600 rounded-full mb-6" />
                
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Who I Am
                </h4>
                
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    I'm a passionate React Developer with a strong drive for creating user-centric solutions. Currently pursuing a B.Sc in Computer Science and Engineering at Green University of Bangladesh with a CGPA of 2.46.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    I'm motivated and collaborative, skilled in using modern technologies such as TypeScript, React,Redux Tooltip, Node.js, and PostgreSQL MongoDB with Mongoose for robust backend development.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    I'm passionate about continuous learning, performance optimization, and delivering user-centric solutions through tools like Tailwind CSS, Express.js, and collaborative development practices.
                  </p>
                </div>
              </div>
              
             
              
              {/* Values Section */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <FaLightbulb className="h-5 w-5" />
                  </span>
                  Core Values
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { 
                      title: "User-Centric", 
                      desc: "Always prioritize the end-user experience in every solution I build",
                      icon: "👥"
                    },
                    { 
                      title: "Continuous Learning", 
                      desc: "Constantly exploring new technologies and methodologies",
                      icon: "📚"
                    },
                    { 
                      title: "Collaborative", 
                      desc: "Believe in teamwork and knowledge sharing for better outcomes",
                      icon: "🤝"
                    }
                  ].map((value, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                    >
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h5>
                      <p className="text-gray-600">{value.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;