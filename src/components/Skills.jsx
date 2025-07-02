import React from "react";
import {
  FaJs, FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiFirebase,
  SiMongoose, SiPostgresql, SiRedux, SiJsonwebtokens,
} from "react-icons/si";
import { BiShieldQuarter } from "react-icons/bi";

const groupedSkills = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaReact className="text-cyan-400" />, label: "React.js" },
      { icon: <SiTailwindcss className="text-teal-400" />, label: "Tailwind CSS" },
      { icon: <FaHtml5 className="text-orange-600" />, label: "HTML5" },
      { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS3" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: <FaNodeJs className="text-green-600" />, label: "Node.js" },
      { icon: <SiExpress className="text-gray-700" />, label: "Express.js" },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: <SiMongodb className="text-green-500" />, label: "MongoDB" },
      { icon: <SiMongoose className="text-green-700" />, label: "Mongoose" },
      { icon: <SiPostgresql className="text-blue-700" />, label: "PostgreSQL" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { icon: <FaGitAlt className="text-red-500" />, label: "Git" },
      { icon: <FaGithub className="text-gray-800" />, label: "GitHub" },
      { icon: <SiFirebase className="text-yellow-500" />, label: "Firebase" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
      { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
      { icon: <FaJava className="text-red-600" />, label: "Java" },
    ],
  },
  {
    title: "Technologies",
    skills: [
      { icon: <SiRedux className="text-purple-600" />, label: "Redux" },
      { icon: <SiJsonwebtokens className="text-green-500" />, label: "JWT" },
      { icon: <BiShieldQuarter className="text-blue-600" />, label: "Firebase Auth" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#F6F9FB]  py-10 px-4 font-poppins">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-2 rounded"></div>
          <p className="text-gray-600 max-w-lg mx-auto text-sm mt-2">
            Tools, technologies, and languages I regularly use.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-8">
          {groupedSkills.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">{group.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex flex-col items-center justify-center bg-white rounded-md shadow-sm p-4 text-sm transition-all hover:shadow-md border-b-4 border-transparent hover:border-blue-500"
                  >
                    <div className="text-2xl mb-1">{skill.icon}</div>
                    <p className="text-gray-700">{skill.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
