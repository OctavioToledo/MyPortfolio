import React from "react";
import { Hero } from "./Sections/Hero/Hero";
import "./App.css";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import AboutMe from "./Sections/AboutMe/AboutMe";

export const App = () => {
  return (
    <>
      <Hero />;
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
};
