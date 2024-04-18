import { motion } from 'framer-motion';
import { useState } from 'react';

type IconProps = {
  className: string
}

const CloudIcon = ({ className }: IconProps) => (
  <span className={className}>
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.405 7.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 13H13a3 3 0 0 0 .405-5.973z" />
    </svg>
  </span>
);

const StarIcon = ({ className }: IconProps) => (
  <span className={className}>
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  </span>
);

const LightMode = () => (
  <>
    <div className="h-10 w-10 rounded-full overflow-hidden shadow-lg relative">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-amber-300 to-yellow-500 rounded-full" />
      <div className="absolute inset-1.5 rounded-full bg-amber-300" />
    </div>
    <CloudIcon className='absolute text-white text-xs left-10 top-1' />
    <CloudIcon className='absolute text-white text-lg left-4 top-4' />
    <CloudIcon className='absolute text-white left-9 top-8' />
    <CloudIcon className='absolute text-white text-xs left-14 top-4' />
  </>
);

const DarkMode = () => (
  <>
    <div className="h-10 w-10 rounded-full overflow-hidden shadow-lg relative">
      <div className="absolute inset-0 bg-slate-100" />
      <div className="w-3 h-3 rounded-full bg-slate-300 absolute right-2.5 bottom-1" />
      <div className="w-3 h-3 rounded-full bg-slate-300 absolute left-1 bottom-4" />
      <div className="w-2 h-2 rounded-full bg-slate-300 absolute right-2 top-2" />
    </div>
    <StarIcon className='text-slate-300 text-xs absolute right-10 top-2' />
    <StarIcon className='text-slate-300 text-lg absolute right-4 top-3' />
    <StarIcon className='text-slate-300 absolute right-8 top-8' />
  </>
);
const StyledToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <button
      onClick={() => { setToggle(prev => !prev) }}
      className="p-2 w-28 rounded-full flex shadow-lg relative bg-gradient-to-b justify-end from-blue-500 to-sky-300"
    >
      {toggle
        ? <LightMode />
        : <DarkMode />
      }
    </button>
  );
};

export default StyledToggle;
