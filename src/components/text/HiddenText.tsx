import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  text: string
};

const HiddenText = ({ text }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const spanRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width, height } = (e.target as HTMLElement)?.getBoundingClientRect();
      const { offsetX, offsetY } = e;
      const left = `${(offsetX / width) * 100}%`;
      const top = `${(offsetY / height) * 100}%`;

      spanRef.current!.animate({ left, top }, { duration: 0, fill: "both" });
    };

    ref?.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      ref?.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-[500px] overflow-hidden text-black bg-black text-lg font-medium grid place-content-center text-justify"
    >
      <span className="relative z-10 pointer-events-none w-[600px] select-none">
        {text}
      </span>
      <div
        ref={spanRef}
        className="absolute pointer-events-none left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full bg-white shadow-[0_0_60px_50px_rgb(255,255,255)]"
      />
    </motion.div>
  );
};

export default HiddenText;
