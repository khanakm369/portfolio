import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

// Animation variants for the projects
const projectVariants = {
  hidden: { opacity: 0, y: 50 }, // Initially hidden (slid down and invisible)
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // Delay based on the index (stagger effect)
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

// Hover effect for individual projects
const hoverEffect = {
  scale: 1.05, // Slightly scale up on hover
  transition: { duration: 0.3 },
};

const Projects = () => {
  return (
    <div className='pb-4'>
      <motion.h2 
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className='flex flex-wrap justify-center'>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            custom={index} // Passing index to the variant
            initial='hidden'
            whileInView='visible'
            variants={projectVariants}
            viewport={{ once: true }} // Animates only once when in view
            whileHover={hoverEffect} // Hover effect for the project card
            className='mb-8 flex flex-wrap lg:justify-center'
          >
            <div className='w-full lg:w-1/4'>
              <motion.img
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className='mb-6 rounded'
                whileHover={{ scale: 1.1 }} // Slightly increase size on hover
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className='w-full max-w-xl lg:w-3/4 p-4'>
              <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
              <p className='mb-4 text-stone-400'>{project.description}</p>

              {/* Loop through project.technologies */}
              <div className='flex flex-wrap'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
