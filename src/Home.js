// src/pages/Home.js
import React from 'react';
import Hero from '../src/components/Hero.js'
import Technologies from '../src/components/Technologies.js'
import Projects from '../src/components/Projects.js';
import Experience from '../src/components/Experience.js';
import Contact from '../src/components/Contact.js';

// This component holds all your main portfolio sections
const Home = () => {
  return (
    <>
      <Hero/>
      <Technologies/>
      <Projects/>
      <Experience/>
      <Contact/>
    </>
  );
};

export default Home;