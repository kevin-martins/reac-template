import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "assets/image_1.png",
  "assets/image_1.png",
  "assets/image_1.png",
  "assets/image_1.png",
  "assets/image_1.png"
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 10;

const springTransition = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, i) => (
        <motion.img
          key={i}
          src={`${process.env.PUBLIC_URL}/${imgSrc}`}
          draggable={true}
          animate={{
            translateX: `-${imgIndex * 100}%`,
            scale: imgIndex === i ? 0.95 : 0.85,
          }}
          transition={springTransition}
          className="pointer-events-none aspect-video w-full h-[80vh] shrink-0 rounded-xl bg-neutral-800 object-cover"
        />
      ))}
    </>
  );
};

type DotsProps = {
  imgIndex: number
  setImgIndex: Dispatch<SetStateAction<number>>
};

const Dots = ({ imgIndex, setImgIndex }: DotsProps) => (
  <div className="mt-4 flex w-full justify-center gap-2">
    {imgs.map((_, i) => (
      <button
        key={i}
        onClick={() => setImgIndex(i)}
        className={`h-3 w-3 rounded-full transition-colors ${
          i === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
        }`}
      />
    ))}
  </div>
);

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-950 py-8">
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
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </div>
  );
};

export default SwipeCarousel;
