import { motion } from 'framer-motion';

const wrapperVariants = {
  show: {
    transition: { staggerChildren: 0.01 }
  }
};

const letterVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

type RevealTextProps = {
  text: string
};

const RevealText = ({ text }: RevealTextProps) => {
  return (
    <motion.section
      variants={wrapperVariants}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      className='md:max-w-5xl px-10'
    >
      {text
        .split('')
        .map((letter, i) => {
          return (
            <motion.span
              key={i}
              variants={letterVariants}
              className='text-black md:max-w-5xl text-sm md:text-lg'
            >
              {letter}
            </motion.span>
          );
        })
      }
    </motion.section>
  );
};

export default RevealText;
