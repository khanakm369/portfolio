import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

// Animation variants for contact details
const contactVariants = {
  hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // Staggered delay based on index
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Contact = () => {
  return (
    <motion.div
      className="border-t border-stone-900 pb-20"
      initial={{ opacity: 0, y: 20 }} // Initial state for the whole section
      animate={{ opacity: 1, y: 0 }} // Fade-in and slide-up effect for the whole section
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h2
        className="my-10 text-center text-4xl"
        variants={contactVariants}
        initial="hidden"
        whileInView="visible"
        custom={0} // First element, no delay
        viewport={{ once: true }} // Animate only once when in view
      >
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        {/* Address */}
        <motion.p
          className="my-4"
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          custom={1} // Second element, delayed
          viewport={{ once: true }} // Animate only once when in view
        >
          {CONTACT.address}
        </motion.p>

        {/* Phone Number */}
        <motion.p
          className="my-4"
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          custom={2} // Third element, more delayed
          viewport={{ once: true }} // Animate only once when in view
        >
          {CONTACT.phoneNo}
        </motion.p>

        {/* Email Link */}
        <motion.a
          href="#"
          className="border-b"
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          custom={3} // Fourth element, even more delayed
          viewport={{ once: true }} // Animate only once when in view
          whileHover={{ scale: 1.1, color: '#0ea5e9' }} // Scale and change color on hover
          transition={{ duration: 0.3 }}
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;
