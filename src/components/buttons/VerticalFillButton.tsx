import React from 'react'

type VerticalFillButtonProps = {
  text: string
}

const VerticalFillButton = ({ text }: VerticalFillButtonProps) => {
  return (
    <button
      className="text-center relative z-0 flex items-center overflow-hidden gap-2 rounded-lg border-[1px] 
        border-black px-4 py-2 font-semibold
        uppercase text-black transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10
        before:-translate-x-[200%] before:scale-[2]
        before:bg-black before:-skew-x-12
        before:transition-transform before:duration-1000
        before:content-[&quot;&quot;]

        hover:scale-105 hover:text-white
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95
      "
    >
      {text}
    </button>
  )
}

export default VerticalFillButton
