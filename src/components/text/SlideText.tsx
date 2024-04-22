import { motion } from 'framer-motion';

export enum Direction {
  UP,
  Down,
  Right,
  Left
};

type Props = {
  title: string,
  text: string,
  value?: number,
  direction?: Direction
};

export const SlideText = ({ title, text, value = 150, direction = Direction.UP }: Props) => {
  const initialPosition = (value: number, direction: Direction): { x: number } | { y: number } => {
    switch (direction) {
      case Direction.UP: return { y: value };
      case Direction.Down: return { y: -value };
      case Direction.Right: return { x: value * -1 };
      case Direction.Left: return { x: value };
    };
  };

  return (
    <div className='overflow-hidden'>
      <motion.section
        initial={{ ...initialPosition(value, direction) }}
        animate={{ x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring" }}
        className='w-full mt-12 pb-10 overflow-hidden'
      >
        <h1 className='text-3xl md:text-5xl w-max mx-auto skew-x-12'>
          {title}
        </h1>
        <div className='bg-slate-600 w-full md:w-32 mt-3 m-auto h-[.3px]' />
        <p className='text-slate-900 mt-8 md:max-w-5xl px-12 text-sm md:text-lg mx-auto text-justify'>
          {text}
        </p>
      </motion.section>
    </div>
  );
};

export default SlideText;
