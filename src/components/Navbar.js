import React from 'react';
import logo from '../assets/khanak_m_stylish_logo.jpeg';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center">
        <a href='/' aria-label='Home'>
          <img src={logo} className='mx-5' width={100} alt='Logo'></img>
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
      </div>
    </nav>
  );
};

export default Navbar;
