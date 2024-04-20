import { motion } from 'framer-motion';

const wrapperVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: .15 }
  }
};

const imageVariants = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const PictureList = () => {
  return (
    <motion.section
      variants={wrapperVariants}
      initial='hidden'
      animate='show'
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
    >
      {Array.from({ length: 12 }, (_, index) => index + 1).map((i) => (
        <div
          key={i}
          className='relative h-full z-0 flex items-center overflow-hidden rounded-lg
            duration-700 scale-95
            
            before:absolute before:inset-0
            before:z-10
            before:translate-y-[48%] hover:before:translate-y-0
            before:scale-x-[1] before:scale-y-[0]
            before:bg-neutral-900/30 before:pointer-events-none
            before:transition-transform before:duration-700
            
            hover:scale-110 hover:before:scale-y-[1]
          '
        >
          <motion.img
            key={i}
            variants={imageVariants}
            src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample${i}.jpg`}
            alt={`random image ${i}`}
            width={250}
            height={250}
            loading='lazy'
            className=''
          />
        </div>
      ))}
    </motion.section>
  );
};

export default PictureList;
