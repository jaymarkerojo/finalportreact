import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
