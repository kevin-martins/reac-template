import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  text: string
};

const ClickPropagationButton = ({ text }: Props) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseClick = (e: MouseEvent) => {
      const { width, height } = (e.target as HTMLElement)?.getBoundingClientRect();
      const { offsetX, offsetY } = e;
      const left = `${(offsetX / width) * 100}%`;
      const top = `${(offsetY / height) * 100}%`;

      spanRef.current!.style.left = left;
      spanRef.current!.style.top = top;
      spanRef.current!.animate(
        { height: '600px', width: '600px' },
        { duration: 400, fill: "both" }
      );
    }

    const handleMouseLeave = () => {
      spanRef.current!.animate(
        { height: '0px', width: '0px' },
        { duration: 150, fill: "forwards" }
      );
    };

    btnRef?.current?.addEventListener("mousedown", handleMouseClick);
    btnRef?.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef?.current?.removeEventListener("mousedown", handleMouseClick);
      btnRef?.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      ref={btnRef}
      className="relative w-[250px] max-w-xs overflow-hidden rounded-lg bg-yellow-500 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 text-black">
        {text}
      </span>
      <motion.span
        ref={spanRef}
        className="pointer-events-none absolute -translate-x-[50%] -translate-y-[50%] rounded-full bg-yellow-600"
      />
    </motion.button>
  );
};

export default ClickPropagationButton;