import { motion } from 'framer-motion';
import { useState } from 'react';

const sliderVariants = {
  hidden: { x: -300 },
  open: { x: -140, transition: { duration: .4 } }
}

const SkillCard = () => {
  const [active, setActive] = useState(false)
  return (
    <div>
      <motion.div className='w-56 border-2 border-slate-200 h-4 rounded-lg overflow-hidden'>
        <motion.div
          variants={sliderVariants}
          initial='hidden'
          animate={active ? 'open' : 'hidden'}
          className='w-56 h-[13px] bg-sky-300 rounded-lg'
        >
          
        </motion.div>
      </motion.div>
      <button onClick={() => { setActive(prev => !prev) }}>Click</button>
    </div>
  );
};

export default SkillCard;
