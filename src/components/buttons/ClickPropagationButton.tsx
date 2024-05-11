import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  text: string
};

const ClickPropagationButton = ({ text }: Props) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width } = (e.target as HTMLElement)?.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      !isClicked && spanRef.current!.animate({ left }, { duration: 100, fill: "forwards" });
    };

    const handleMouseClick = (e: MouseEvent) => {
      const { width, height } = (e.target as HTMLElement)?.getBoundingClientRect();
      spanRef.current!.animate(
        { height: '600px', width: '600px' },
        { duration: 250, fill: "forwards" }
      );
      setIsClicked(true);
    }

    const handleMouseLeave = () => {
      spanRef.current!.animate(
        { height: '0px', width: '0px' },
        { duration: 150, fill: "forwards" }
      );
      setIsClicked(false);
    };

    btnRef?.current?.addEventListener("mousemove", handleMouseMove);
    btnRef?.current?.addEventListener("mousedown", handleMouseClick);
    btnRef?.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef?.current?.removeEventListener("mousemove", handleMouseMove);
      btnRef?.current?.removeEventListener("mousedown", handleMouseClick);
      btnRef?.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isClicked]);

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
        className="pointer-events-none origin-center absolute left-[50%] top-[50%] h-0 w-0 -translate-x-[50%] -translate-y-[50%] rounded-full bg-yellow-600"
      />
    </motion.button>
  );
};

export default ClickPropagationButton;