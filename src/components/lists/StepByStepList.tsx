import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const listWrapperVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: .7, staggerChildren: 0.01 }
  }
};

const letterVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const titleVariants = {
  hidden: {
    x: -50,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: .2,
      duration: .4
    }
  }
};

const StepByStepList = () => {
  enum State {
    Step1,
    Step2,
    Step3
  };
  const [state, setState] = useState<State>(State.Step1);
  const [doAnimation, setDoAnimation] = useState(true);
  const explanationData = {
    [State.Step1]: {
      title: 'Step 1:',
      steps: [
        "- Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "- Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "- Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ]
    },
    [State.Step2]: {
      title: 'Step 2:',
      steps: [
        "- Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "- Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ]
    },
    [State.Step3]: {
      title: 'Step 3:',
      steps: [
        "- Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "- Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "- Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "- Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ]
    }
  };
  
  useEffect(() => {
    setDoAnimation(false);
    setTimeout(() => {
      setDoAnimation(true);
    }, 650)
  }, [state]);

  return (
    <div className='mx-auto mb-12'>
      <div>
        <motion.h1
          variants={titleVariants}
          initial='hidden'
          animate={doAnimation ? 'show' : 'hidden'}
          className='font-medium text-black'
        >
          {explanationData[state]?.title}
        </motion.h1>
        <motion.ul
          variants={listWrapperVariants}
          initial='hidden'
          animate={doAnimation ? 'show' : 'hidden'}
          className='text-slate-900 ml-6'
        >
          {explanationData[state]?.steps.map((step: any, i: number) => {
            return (
              <li key={i}>
                {step.split('').map((letter: string, j: number) => (
                  <motion.span
                    key={`${i}${j}`}
                    variants={letterVariants}
                    className='text-slate-400 ease-in-out transition-all duration-500'
                  >
                    {letter}
                  </motion.span>
                ))}
              </li>
            )
          })}
        </motion.ul>
      </div>

      <div className='space-x-2 mx-auto mt-10 w-fit'>
        <button
          onClick={() => setState(State.Step1)}
          className='px-6 py-2 bg-blue-400 hover:bg-blue-600 rounded-lg text-white hover:scale-110'
        >
          Step 1
        </button>
        <button
          onClick={() => setState(State.Step2)}
          className='px-6 py-2 bg-green-400 hover:bg-green-600 rounded-lg text-white hover:scale-110'
        >
          Step 2
        </button>
        <button
          onClick={() => setState(State.Step3)}
          className='px-6 py-2 bg-red-400 hover:bg-red-600 rounded-lg text-white hover:scale-110'
        >
          Step  3
        </button>
      </div>
    </div>
  );
};

export default StepByStepList;
