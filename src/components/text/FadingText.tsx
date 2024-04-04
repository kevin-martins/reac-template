import { motion } from 'framer-motion';

const wrapperVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
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
  // const text = "Wow, avez-vous déjà essayé de jongler avec des citrons tout en dansant la salsa sur un fil de fer ? C'est comme faire du breakdance avec des ananas en écoutant de la musique classique !"
  return (
    <motion.section
      variants={wrapperVariants}
      initial='hidden'
      animate='show'
      className='text-white'
    >
      {text
        .split('')
        .map((letter, i) => {
          return (
            <motion.span
              key={i}
              variants={imageVariants}
              className='text-white ease-in-out transition-all duration-500'
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
