import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F6F9FB]">
      <section id="Hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
       <Skills></Skills>
      </section>
      <section id="contact">
       <Contact></Contact>
      </section>
      {/* add other sections with their ids here */}
    </div>
  );
};

export default Home;
