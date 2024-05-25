import React from 'react'

type Props = {
  text: string
}

const CircleFillButton = ({ text }: Props) => {
  return (
    <button
      onClick={() => {}}
      className='relative flex py-4 px-12 w-fit z-0 rounded-full border border-black overflow-hidden bg-slate-800 text-white font-medium hover:text-black
        before:absolute before:bg-slate-200 before:-z-10
        before:content-[""] before:inset-0 before:rounded-full
        before:-translate-x-[110%] hover:before:translate-x-[0%] before:duration-300
        active:scale-95 hover:scale-105 duration-300
      '
    >
      {text}
    </button>
  )
}

export default CircleFillButton
