import React from "react";
import "animate.css";
import surbicehub from "../assets/ServiceHub.jpg";
import greenpath from "../assets/greenpathexplorer.jpg";
import jobportal from "../assets/jobportal.jpg";
import GadgetHeaven from "../assets/GadgetHeaven.jpg";

const projects = [
  {
    title: "Service Hub",
    description: "A job-seeking platform with advanced filtering options.",
    image: surbicehub,
    link: "https://quickserve-f419b.web.app/",
  },
  {
    title: "Job Portal",
    description:
      "A movie discovery platform with authentication and favorites.",
    image: jobportal,
    link: "http://localhost:5173/",
  },
  {
    title: "GreenPath Explore",
    description: "An e-commerce platform for the latest gadgets.",
    image: greenpath,
    link: "https://greenpath-explorer.web.app/",
  },
  {
    title: "Gadget Heaven",
    description: "An e-commerce platform for the latest gadgets.",
    image: GadgetHeaven,
    link: "https://fascinating-taffy-3e2fb5.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32  text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 animate__animated animate__fadeInDown">
          <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg shadow-purple-500/20 
              hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                  font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
