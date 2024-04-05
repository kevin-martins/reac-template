import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const wrapperVariants = {
  hidden: { opacity: 0 },
  show: {
    transition: { staggerChildren: 0.005 }
  }
};

const imageVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

type FadingTextProps = {
  text: string
};

const FadingText = ({ text }: FadingTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      variants={wrapperVariants}
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

export default FadingText;
