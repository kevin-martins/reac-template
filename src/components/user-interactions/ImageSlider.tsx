import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];

const ImageSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    // if (page + newDirection < 0) {
    //   setPage([images.length - 1, -1]);
    // } else if (page + newDirection > images.length - 1) {
    //   setPage([0, 1]);
    // } else {
    setPage([page + newDirection, newDirection]);
    // }
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <AnimatePresence initial={true} custom={direction}>
        <motion.img
          key={page}
          src={images[page]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute w-full"
        />
      </AnimatePresence>
      <button className="next" onClick={() => paginate(1)}>
        {"‣"}
      </button>
      <button className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </button>
    </div>
  );
};

export default ImageSlider;
