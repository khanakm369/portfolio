// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home.js';

// Remove direct imports for Hero, Technologies, Projects, etc.

const App = () => {
  return (
    // 💡 1. Wrap the entire application in the Router
    <Router>
       <div className='overflow-x-hidden text-stone-300 antialised'>
            <div className="fixed inset-0 -z-10 ">
            <div className="relative h-full w-full bg-black">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
            </div>
            </div>

          {/* MAIN CONTENT CONTAINER */}
            <div className="container max-auto px-8">
              
              {/* 💡 2. Navbar is outside the Routes, so it always shows */}
              <Navbar/>
              
              {/* 💡 3. Define the conditional routing here */}
              <Routes>
                  {/* Default Route: Shows the full portfolio content */}
                  <Route path="/" element={<Home />} /> 
                  
                  
                  
                  {/* Optional: Catch-all route for 404s */}
                  <Route path="*" element={
                    <div className="text-center pt-20">
                      <h1 className="text-4xl">404 - Page Not Found</h1>
                    </div>
                  } />
              </Routes>
              
            </div>
       </div>
    </Router>
  )
}

export default App;