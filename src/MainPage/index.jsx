import React from "react";
import Navigation from "./Components/Navigation";
import Hero from './Components/Hero';
import Projects from "./Components/Projects";
import './style.scss';
import SingleProject from "./Components/SingleProject";

const MainPage = () => {
  const project = true;
  return (
    <>
      <Navigation />
      <Hero />
      {
        project ? <SingleProject project={project}/> : <Projects />
      }
    </>
  );
};

export default MainPage;