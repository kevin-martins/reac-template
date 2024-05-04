import React from 'react'

type Props = {
  text: string
}

const CloseButton = ({ text }: Props) => {
  return (
    <button
      className="relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-black px-4 py-2 font-semibold
        uppercase text-black transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[-150%]
        before:scale-[1.5] before:bg-black
        before:transition-transform before:duration-1000
        before:content-[&quot;&quot;]

        after:absolute after:inset-0
        after:-z-10 after:translate-x-[150%]
        after:scale-[1.5] after:bg-black
        after:transition-transform after:duration-1000
        after:content-[&quot;&quot;]

        hover:scale-105 hover:text-white
        hover:before:translate-x-[0%]
        hover:after:translate-x-[0%]
        active:scale-95
      "
    >
      {text}
    </button>
  );
};

export default CloseButton;
