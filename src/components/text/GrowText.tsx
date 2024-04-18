import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const wrapperVariants = {
  // hidden: { scale: 0 },
  show: {
    transition: { staggerChildren: 0.005 }
  }
};

const letterVariants = {
  hidden: { scale: 0 },
  show: { scale: 1 }
};

type GrowTextProps = {
  text: string
};

const GrowText = ({ text }: GrowTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      variants={wrapperVariants}
      // initial='hidden'
      animate={isInView && 'show'}
      className='md:max-w-5xl'
    >
      {text
        .split('')
        .map((letter, i) => {
          return (
            <motion.span
              key={i}
              variants={letterVariants}
              className='text-slate-400 md:max-w-5xl text-sm md:text-lg'
            >
              {letter}
            </motion.span>
          );
        })
      }
    </motion.section>
  );
};

export default GrowText;
