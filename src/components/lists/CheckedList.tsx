import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const infoVariants = {
  hidden: { y: -30, opacity: 0 },
  open: { y: 0, opacity: 1 }
};

type ElementProps = {
  text: string
};

const Elements = ({ text }: ElementProps) => {
  return (
    <motion.li
      variants={infoVariants}
      className="flex flex-row gap-[.5px]"
    >
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 my-auto mr-1">
        <path d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z" fill="green" />
      </svg>
      <p>{text}</p>
    </motion.li>
  );
};

const wrapperVariants = {
  hidden: {},
  open: {
    transition: { staggerChildren: .25 }
  }
};

type CheckedList = {
  list: string[]
};

const CheckedList = ({ list }: CheckedList) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.ul
      ref={ref}
      variants={wrapperVariants}
      initial='hidden'
      animate={isInView && 'open'}
      className='flex flex-col z-10 text-black dark:text-white'
    >
      {list.map((text, i) => (
        <Elements key={i} text={text} />
      ))}
    </motion.ul>
  );
};

export default CheckedList;
