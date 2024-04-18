import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const rightVariants = {
  hidden: { x: 300, opacity: 0 },
  open: { x: 0, opacity: 1 }
}

const leftVariants = {
  hidden: { x: -300, opacity: 0 },
  open: { x: 0, opacity: 1 }
}

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
        animate={isInView && 'open'}
        className='p-20 bg-red-200'
      >
        Hello
      </motion.div>
      <motion.div
        variants={rightVariants}
        initial='hidden'
        animate={isInView && 'open'}
        className='p-20 bg-blue-200'
      >
        Hello
      </motion.div>
    </div>
  );
};

export default FromBothSide;
