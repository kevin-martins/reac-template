import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const wrapperVariants = {
  hidden: {  },
  show: {
    // opacity: 1,
    transition: { staggerChildren: 0.0005 }
  }
};

const imageVariants = {
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
      initial='hidden'
      animate={isInView ? 'show' : 'hidden'}
      className='md:max-w-5xl'
    >
      {text
        .split('')
        .map((letter, i) => {
          return (
            <motion.span
              key={i}
              variants={imageVariants}
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
