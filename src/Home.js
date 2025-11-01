// src/pages/Home.js
import React from 'react';
import Hero from '../src/components/Hero.js'
import Technologies from '../src/components/Technologies.js'
import Projects from '../src/components/Projects.js';
import Experience from '../src/components/Experience.js';
import Contact from '../src/components/Contact.js';
import { useNavigate } from 'react-router-dom';

// This component holds all your main portfolio sections
const Home = () => {

  const navigate = useNavigate();
 
  const handleOnClickForTest = () => {
    navigate('/test'); // ✅ Navigate to route path
  }
  

  return (
    <>
      <Hero/>
      <Technologies/>
      <Projects/>
      <Experience/>
       <div className="flex justify-center mt-6">
        <button 
          onClick={handleOnClickForTest} 
          className="px-6 py-3 text-black bg-white rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Take Your Technical Test
        </button>
      </div>
      <Contact/>
    </>
  );
};

export default Home;