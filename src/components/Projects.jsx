import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiFramer,
  SiFirebase,
  SiVercel,
  SiReacthookform,
  SiReactrouter,
  SiAxios,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaSwatchbook } from "react-icons/fa";

// Images
import digitalHub from "../assets/greenpathexplorer.jpg";
import serviceApp from "../assets/ServiceHub.jpg";
import jobPortal from "../assets/jobportal.jpg";
import cafeNova from "../assets/CafeNova.jpg";

// Icon mapping
const iconMap = {
  React: <SiReact />,
  Tailwind: <SiTailwindcss />,
  "Tailwind CSS": <SiTailwindcss />,
  Express: <SiExpress />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  JWT: <SiJsonwebtokens />,
  "Framer Motion": <SiFramer />,
  Firebase: <SiFirebase />,
  "Firebase Hosting": <SiFirebase />,
  "Vercel & Firebase Hosting": <SiVercel />,
  Vercel: <SiVercel />,
  "React Hook Form": <SiReacthookform />,
  "React Router": <SiReactrouter />,
  Axios: <SiAxios />,
  JavaScript: <SiJavascript />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />,
  SweetAlert2: <FaSwatchbook />,
};

const projects = [
  {
    id: 1,
    title: "CafeNova AI",
    description:
      "CafeNova AI is a smart restaurant management system powered by OpenAI and Gemini. It offers dynamic menus, filtering, cart/order features, role-based access, and an AI chatbot. Built with modern UI tools like ShadCN and DaisyUI.",
    technologies: [
      "Firebase",
      "Firebase Authentication",
      "Gemini API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
      "Shadcn UI",
      "DaisyUI",
      "SweetAlert2",
      "Framer Motion",
    ],
    demoLink: "https://cafenova-cf9df.web.app/",
    codeLink: "https://github.com/Alamin10231/CafeNova",
    image: cafeNova,
  },

  {
    id: 2,
    title: "Service Sharing App",
    description:
      "A service sharing platform with booking, role-based access, and dynamic features using JWT, Stripe, and theme support.",
    technologies: [
      "React",
      "Tailwind CSS",
      "React Hook Form",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
      "Framer Motion",
      "Firebase",
      "Firebase Authentication",
      "SweetAlert2",
      "Context API",
      "React Router",
      "Vercel",
    ],
    demoLink: "https://quickserve-f419b.web.app/",
    codeLink: "https://github.com/your-username/service-sharing-app",
    image: serviceApp,
  },

  {
    id: 4,
    title: "Digital Electronics Hub",
    description:
      "A full-stack e-commerce platform for electronics enthusiasts, allowing users to explore and purchase with AI chatbot help.",
    technologies: ["Next.js", "Tailwind", "Node.js", "MongoDB", "JWT"],
    demoLink: "https://greenpath-explorer.web.app/",
    codeLink: "https://github.com/your-username/electronics-hub",
    image: digitalHub,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-gray-900 mx-auto ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h2>

        <p className="pb-4 text-lg text-center font-semibold text-gray-700">
          A selection of my recent work and projects I've built. Each project is{" "}
          <br />
          unique and solves specific problems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white pt-5 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                    >
                      {iconMap[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow hover:shadow-lg transition-all"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
