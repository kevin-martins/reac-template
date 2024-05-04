import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 26;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHover(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        // backgroundImage: "radial-gradient(circle at center center, rgb(252, 252, 252), rgb(82, 82, 82))"
        // backgroundImage: "radial-gradient(circle at center center, rgb(93, 60, 152),rgb(10, 3, 9))"
        backgroundImage: "radial-gradient(circle at top center, rgb(193,90,152), rgb(19,25,57), rgb(34,44,96), rgb(92,148,216), rgb(64,99,178), rgb(14,23,44))"
      }}
      className="relative h-96 w-72 rounded-xl"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-xl shadow-lg text-white"
      >
        <motion.h2
          animate={isHover ? { y: 20, z: 30, opacity: 1 } : { y: -5, z: 30, opacity: 0 }}
          className="absolute w-full text-center text-2xl"
        >
          Dive into Darkness
        </motion.h2>
        <img
          src={process.env.PUBLIC_URL + '/assets/image_2.png'}
          alt="a man facing a gigantic tree"
          className="rounded-xl w-full h-full object-cover"
        />
        <motion.div
          animate={isHover ? { y: -60, z: 50, opacity: 1, scale: 1 } : { y: -30, z: 50, opacity: 0, scale: 0 }}
          transition={{ duration: .3 }}
          className="w-full text-center"
        >
          <a
            href="/"
            className="inline-block px-6 py-2 bg-slate-900 hover:bg-slate-950 hover:scale-110 rounded-lg select-none font-medium text-lg"
          >
            visit now
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TiltCard;