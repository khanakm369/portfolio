import React from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { motion } from 'framer-motion';

// Function to define animation variants for icons
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className='pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }} // Start with opacity 0 for a better fade-in effect
        transition={{ duration: 1.5 }} // Positive duration
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h2>
      
      {/* Container for icons */}
      <motion.div className='flex flex-wrap items-center justify-center gap-4'>
        {/* React */}
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
          <RiReactjsLine className='text-7xl text-cyan-500' />
        </motion.div>
        
        {/* Next.js */}
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='p-4'>
          <TbBrandNextjs className='text-7xl' />
        </motion.div>
        
        {/* MongoDB */}
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='p-4'>
          <SiMongodb className='text-7xl text-cyan-500' />
        </motion.div>
        
        {/* Redis */}
        <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className='p-4'>
          <DiRedis className='text-7xl text-red-700' />
        </motion.div>
        
        {/* Node.js */}
        <motion.div variants={iconVariants(2.3)} initial="initial" animate="animate" className='p-4'>
          <FaNodeJs className='text-7xl text-green-500' />
        </motion.div>
        
        {/* PostgreSQL */}
        <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className='p-4'>
          <BiLogoPostgresql className='text-7xl text-sky-500' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
