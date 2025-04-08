import React from "react";

const educationData = [
  {
    year: "2022 - Present",
    degree: "B.Sc. in CSE",
    institution: "Green University of Bangladesh",
  },
  {
    year: "2018 - 2020",
    degree: "Higher Secondary Certificate",
    institution: "Shympur Govt Model School and College ",
  },
  {
    year: "2008 - 2018",
    degree: "Secondary School Certificate",
    institution: "Hasnabad Kamuchan Shah High School",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 animate__animated animate__fadeInDown">
          <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
         <div
         key={index}
         className="bg-gray-800 rounded-xl p-6 shadow-lg shadow-purple-500/20 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white"
       >
         <h3 className="text-xl font-semibold transition-colors duration-500">{edu.degree}</h3>
         <p className="text-gray-400 transition-colors duration-500">{edu.institution}</p>
         <span className="text-sm text-gray-500">{edu.year}</span>
       </div>
       
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
