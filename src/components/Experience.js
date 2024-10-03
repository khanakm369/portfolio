import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

// Animation variants for the experience cards
const experienceVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial state: hidden and slightly slid down
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // Staggered animation based on index
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Experience = () => {
  return (
    <div className="pb-4">
      {/* Heading with animation */}
      <motion.h2
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }} // Slide the heading from above with opacity
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Experience
      </motion.h2>

      {/* Experience cards */}
      {EXPERIENCES.map((experience, index) => (
        <motion.div
          key={index}
          custom={index} // Pass index to the animation variant
          initial="hidden"
          whileInView="visible"
          variants={experienceVariants}
          viewport={{ once: true }} // Animate once when the card enters the viewport
          className="mb-8 flex flex-wrap lg:justify-center"
        >
          {/* Year */}
          <div className="w-full lg:w-1/4">
            <motion.p
              className="mb-2 text-sm text-stone-400"
              whileHover={{ scale: 1.1, color: "#ffffff" }} // Slight hover effect for the year
              transition={{ duration: 0.3 }}
            >
              {experience.year}
            </motion.p>
          </div>

          {/* Role, Company, Description */}
          <div className="w-full max-w-xl lg:w-3/4">
            <motion.h3
              className="mb-2 font-semibold"
              whileHover={{ scale: 1.05 }} // Scale up slightly on hover
              transition={{ duration: 0.3 }}
            >
              {experience.role}{" "}
              <span className="text-sm text-stone-500">{experience.company}</span>
            </motion.h3>

            <p className="mb-4 text-stone-400">{experience.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap">
              {experience.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                  whileHover={{ scale: 1.1 }} // Slight scale-up on hover
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
