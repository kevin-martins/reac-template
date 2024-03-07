import React, { useState } from 'react';
import { motion } from 'framer-motion';

const infoVariants = {
  hidden: { x: 0, transition: { duration: 2 } },
  show: { x: -330, transition: { duration: 2 } }
}

const DynamicBackground = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      {/* Text with dynamic background color */}
      {/* <span style={{ backgroundColor }}className='bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-left text-lg font-medium'>This text has a dynamic background color</span> */}
      {/* <motion.span
        animate={{ color: "linear-gradient(to right, #4880EC, #019CAD)" }}
        className=""
      >
        Bonjour
      </motion.span> */}
      <button
        className="bg-[linear-gradient(to_right,#8f14e6,#e614dc,#e61453,#e68414,#e6e614)] font-medium px-3 py-2 bg-clip-text rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span className="relative z-10">Sign up free</span>
        <motion.div className="bg-[linear-gradient(to_right,#8f14e6,#e614dc,#e61453,#e68414,#e6e614)] absolute z-0 inset-0 w-[400%]" animate={isHover ? 'show': 'hidden'}
          variants={infoVariants}
        />
      </button>
      {/* Button to change background color */}
      {/* <button className='bg-black border-4 border-red-500 ' onClick={handleChangeColor}>Change Background Color</button> */}
      
    </div>
  );
}

export default DynamicBackground;
