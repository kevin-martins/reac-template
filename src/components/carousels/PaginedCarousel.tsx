import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
  "assets/image_1.png",
  "assets/image_1.png",
  "assets/image_1.png",
  "assets/image_1.png",
  "assets/image_1.png"
];

const SWIPE_DELAY = 10000;
const DRAG_BUFFER = 10;

const springTransition = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

type ImagesProps = {
  imgIndex: number
}

const Images = ({ imgIndex }: ImagesProps) => {
  return (
    <>
      {images.map((image, i) => (
        <motion.img
          key={i}
          src={`${process.env.PUBLIC_URL}/${image}`}
          draggable={true}
          animate={{
            translateX: `-${imgIndex * 100}%`,
            scale: imgIndex === i ? 0.95 : 0.85,
          }}
          loading="lazy"
          transition={springTransition}
          className="pointer-events-none aspect-video w-full h-[80vh] shrink-0 rounded-xl bg-neutral-800 object-cover"
        />
      ))}
    </>
  );
};

type LineProps = {
  imgIndex: number,
  setImgIndex: Dispatch<SetStateAction<number>>
}

const Line = ({ imgIndex, setImgIndex }: LineProps) => (
  <div className="flex w-full justify-center gap-2 overflow-hidden">
    {images.map((_, i) => (
      <button key={i} onClick={() => setImgIndex(i)} className="flex flex-col">
        <motion.span
          animate={i === imgIndex ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }}
          className="mx-auto text-white"
        >
          {i+1}
        </motion.span>
        <hr
          className={`h-px w-8 rounded-full transition-colors border-px
            ${i === imgIndex ? "border-neutral-50" : "border-neutral-500"}
          `}
        />
      </button>
    ))}
  </div>
);

const PaginedCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === images.length - 1) {
            return 0;
          }
          return pv + 1;
        })
      }
    }, SWIPE_DELAY);

    return () => clearInterval(intervalRef);
  }, [images, dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  }

  const handleClick = (previous: boolean = false) => {
    setImgIndex((pv) => {
      if (pv === images.length - 1 && !previous) {
        return 0;
      } else if (previous && pv === 0) {
        return images.length - 1;
      } else if (previous) {
        return pv - 1;
      }
      return pv + 1;
    });
  };

  return (
    <div className="relative overflow-hidden py-8 bg-black">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        style={{
          x: dragX,
        }}
        transition={springTransition}
        onDragEnd={onDragEnd}
        className="flex w-fit cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      <Line imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <button
        onClick={() => handleClick(true)}
        className="absolute top-1/2 -translate-y-1/2 left-10 text-3xl text-black hover:bg-white rounded-full w-16 h-16 duration-500"
      >
        <IoIosArrowBack className="mx-auto" />
      </button>
      <button
        onClick={() => handleClick()}
        className="absolute top-1/2 -translate-y-1/2 right-10 text-3xl text-black hover:bg-white rounded-full w-16 h-16 duration-500"
      >
        <IoIosArrowForward className="mx-auto" />
      </button>
    </div>
  );
};

export default PaginedCarousel;
