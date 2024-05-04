import React from 'react'

type Props = {
  text: string
}

const CircleButton = ({ text }: Props) => {
  return (
    <button
      className="relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-black px-4 py-2 font-semibold
        uppercase text-black transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-y-[150%]
        before:rounded-[100%]
        before:scale-[1.5] before:bg-black
        before:transition-transform before:duration-700
        before:content-[&quot;&quot;]

        hover:scale-105 hover:text-white
        hover:before:translate-y-[0%]
        active:scale-95
      "
    >
      {text}
    </button>
  );
};

export default CircleButton;
