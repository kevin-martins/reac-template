import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const pricingVariants = {
  initial: { y: -50, opacity: 0 },
  exit: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const words = ['Bitcoin', 'Etherum', 'Cardano', 'Verasity', 'XRP'];

const SlideTitle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex(prev => (prev === words.length ? 0 : prev++));
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className=''>
      <h1 className="text-xl font-medium inline-flex">Crypto is here, invest now</h1>
      {" "}
      <div className="overflow-hidden mb-8">
        <AnimatePresence mode='wait'>
          {/* {words[index].split('').map((letter, i) => (
            <motion.span
              key={letter}
              id={letter+i}
              variants={pricingVariants}
              initial='initial'
              animate='show'
              exit='exit'
              className="text-3xl"
            >
              {letter}
            </motion.span>
          ))} */}
            <motion.span
              key={words[index]}
              id={words[index]}
              variants={pricingVariants}
              initial='initial'
              animate='show'
              exit='exit'
              className="text-3xl"
            >
              {words[index]}
            </motion.span>
        </AnimatePresence>
      </div>
      <button onClick={() => { setIndex(0) }}>Button</button>
      <button onClick={() => { setIndex(1) }}>Button</button>
      <button onClick={() => { setIndex(2) }}>Button</button>
    </div>
  );
};

export default SlideTitle;
