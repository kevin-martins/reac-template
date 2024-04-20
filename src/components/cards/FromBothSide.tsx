import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const rightVariants = {
  hidden: {
    x: 500,
    opacity: 0
  },
  open: {
    x: -10,
    opacity: 1,
    transition: {
      duration: .6,
      type: "spring",
      bounce: .4,
    }
  }
};

const leftVariants = {
  hidden: {
    x: -500,
    opacity: 0
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      type: "spring",
      bounce: .5,
    }
  }
};

const FromBothSide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); 
  return (
    <div
      ref={ref}
      className='flex w-full h-full items-center justify-center'
    >
      <motion.div
        variants={leftVariants}
        initial='hidden'
        animate={isInView ? 'open' : 'hidden'}
        transition={{ ease: "easeOut" }}
        className='p-12 max-w-[500px] bg-gray-800 text-white'
      >
        <h1
          className='text-5xl pb-5 font-medium'
        >
          Freedom
          <span className='text-xl'>, above your dreams</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempora perspiciatis deleniti nostrum recusandae quod? Dignissimos perspiciatis perferendis dolore necessitatibus praesentium repudiandae obcaecati eveniet id accusantium assumenda, explicabo ratione molestias.
        </p>
      </motion.div>
      <motion.img
        variants={rightVariants}
        src='https://picsum.photos/seed/picsum/400/250'
        alt='random image'
        initial='hidden'
        animate={isInView && 'open'}
      />
    </div>
  );
};

export default FromBothSide;
