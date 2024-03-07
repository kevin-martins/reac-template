import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ROTATION_RANGE = 25;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const MovingCard = ({ children }) => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = (mouseX / width - HALF_ROTATION_RANGE);
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative h-44 lg:h-[350px] lg:w-[548px] sm:w-96 mx-auto w-80 rounded-xl bg-slate-900/90"// lg:w-[45rem] sm:w-[30rem] xs:w-[25rem] w-72 
    >
      {/* <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute lg:inset-8 inset-4 grid place-content-center rounded-xl shadow-lg bg-slate-100"// bg-gradient-to-br from-purple-900 to-purple-800
      >
        {children}
      </div> */}
      <div
        style={{
          transform: "translateZ(120px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute lg:inset-6 inset-4 grid place-content-center rounded-xl shadow-lg bg-black p-5"
      >
        <img
          src="/logo.png"
          alt="ddd"
          style={{
            width: "100%",
            height: "100%",
          }}
          className="relative rounded-xl"// bg-gradient-to-br from-purple-900 to-purple-800
        />
        <p
          style={{
            transform: "translateZ(15px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute text-3xl text-slate-100 right-0 top-0 px-10 tracking-wide"
        >
          01.60.88.94.94
        </p>
        <p
          style={{
            transform: "translateZ(10px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute text-sm text-slate-100 right-0 top-10 px-8 tracking-wide"
        >
          Une entreprise artisanale à votre<br /><span className="pl-5"> service depuis 1998</span>
        </p>
        <p
          style={{
            transform: "translateZ(10px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute text-lg text-slate-100 left-0 bottom-0 px-5 tracking-wide"
        >
          75 Bd de Fontainebleau<br /><span>91100 Corbeil-Essonnes</span>
        </p>
        <p
          style={{
            transform: "translateZ(10px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute text-lg text-red-500 right-0 bottom-0 px-9 tracking-wide"
        >
          DEVIS GRATUIT
        </p>
      </div>
    </motion.div>
  );
};

export default MovingCard;