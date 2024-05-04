import { motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  text: string
}

const RotatingBorderButton = ({ text }: Props): JSX.Element => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: .95 }}
      className='relative grid place-content-center h-14 w-44 overflow-hidden border border-black rounded-lg'
    >
      <motion.div
        animate={isHover ? { x: [0, 171, 171, 0, 0], y: [0, 0, 51, 51, 0], transition: { duration: 2.2, repeat: Infinity } } : { opacity: 0 }}
        className='absolute -z-10 -top-[5px] -left-[5px] rounded-[100%] bg-slate-600 p-2 shadow-[0_0_40px_30px_rgb(51,65,85)]'
      />
      <div className={`bg-white ${isHover ? 'border' : ''} border-black rounded-lg h-[50px] w-[170px] grid place-content-center`}>
        <span>
          {text}
        </span>
      </div>
    </motion.button>
  );
};

export default RotatingBorderButton;