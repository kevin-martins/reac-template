type Props = {
  text: string
}

const SlideButton = ({ text }: Props) => {
  return (
    <button
      className="text-center relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-black px-4 py-2 font-semibold
        uppercase text-black transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-black
        before:transition-transform before:duration-1000
        before:content-[&quot;&quot;]

        hover:scale-105 hover:text-white
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95
      "
    >
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" y1="12" x2="3" y2="12" />
      </svg>
      <span>{text}</span>
    </button>
  )
}

export default SlideButton
