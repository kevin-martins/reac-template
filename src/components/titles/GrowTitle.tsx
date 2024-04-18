import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letterVariants = {
  initial: {
    scale: 0
  },
  open: {
    scale: 1,
    transition: { duration: 1 }
  }
};
const words = ["change", "act", "help"];

const GrowTitle = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPage((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [page]);

  return (
    <div>
      <h1 className="text-xl font-medium inline-flex">Invest to</h1>
      {" "}
      <AnimatePresence mode='wait'>
        {words[page].split('').map((letter, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            initial='initial'
            animate='open'
            exit='initial'
            className="text-3xl"
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default GrowTitle;
