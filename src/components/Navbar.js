import React from 'react';
import logo from '../assets/khanak_m_stylish_logo.jpg';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Sportify_logo from '../assets/projects/spotify_logo.png'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center">
        <a href='/' aria-label='Home'>
          <img src={logo} className='mx-5' width={50} alt='Logo'></img>
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href='https://www.linkedin.com/in/khanak-m/' 
          target='_blank' 
          rel='noopener noreferrer' 
          aria-label='LinkedIn'>
          <FaLinkedin />
        </a>
        <a 
          href='https://github.com/khanakm369' 
          target='_blank' 
          rel='noopener noreferrer' 
          aria-label='Github'>
          <FaGithub />
        </a>
        <a 
          href='https://www.instagram.com/khanak_m_raj?igsh=b2RwaDJkbmJveGg0' 
          target='_blank' 
          rel='noopener noreferrer' 
          aria-label='Instagram'>
          <FaInstagram />
        </a>
        <a 
          href='https://www.linkedin.com/in/khanak-m/' 
          target='_blank' 
          rel='noopener noreferrer' 
          aria-label='Twitter'>
          <FaTwitter />
        </a>

       
     <div className="flex items-center ml-4"> 
          <a href="/api/login" className="no-underline">
            <button
              // Base Button Styles
              className="flex items-center justify-center p-2 rounded-full 
                         bg-[#1DB954] text-white font-bold uppercase text-sm 
                         shadow-lg transition duration-300 transform 
                         hover:bg-[#1ED760] hover:scale-[1.02] hover:shadow-xl"
            >
              <img 
                src={Sportify_logo} 
                alt="Spotify Logo" 
                className="w-6 h-6 mr-2"
              />
              Login to Spotify
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
