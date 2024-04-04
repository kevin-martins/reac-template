import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

enum Direction {
  UP,
  Down,
  Right,
  Left
}

type Props = {
  title: string,
  text: string,
  direction: Direction
};

export const TextSection = ({ title, text, direction = Direction.UP }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const movingDirection = (direction: Direction) => {
    switch (direction) {
      case Direction.UP: return "translateY(100px)";
      case Direction.Down: return "translateY(-100px)";
      case Direction.Right: return "translateX(-100px)";
      case Direction.Left: return "translateX(100px)";
    };
  };

  return (
    <motion.section
      ref={ref}
      style={{
        transform: isInView ? "none" : movingDirection(direction),
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)"
      }}
      className='w-full mt-12 pb-10'
    >
      <h1 className='text-3xl md:text-5xl w-max mx-auto skew-x-12'>
        {title}
      </h1>
      <div className='bg-yellow-600 w-24 md:w-32 mt-3 m-auto h-[.3px]' />
      <p className='text-slate-400 mt-8 md:max-w-5xl px-12 text-sm md:text-lg mx-auto text-justify'>
        {text}
      </p>
    </motion.section>
  );
};

export default TextSection;
