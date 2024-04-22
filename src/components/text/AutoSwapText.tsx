import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const staggerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

const words = ["share", "like", "donate", "comment"];

const AutoSwapText = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWordIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [wordIndex]);

  return (
    <div className='text-center h-44 rounded-full shadow-[0_15px_5px_-5px_rgba(0,0,0,.15)] grid place-content-center pt-8'>
      <h1 className="text-xl font-medium">We need your help !</h1>
      <motion.div
        key={words[wordIndex]}
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className='w-fit inline-flex mx-auto'
      >
        {words[wordIndex].split('').map((letter, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            className="text-3xl uppercase font-[FontAwesome]"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoSwapText;
