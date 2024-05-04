import { motion } from 'framer-motion';

type Props= {
  text: string
}

const RotatingGradientButton = ({ text }: Props) => {
  return (
    <button
      className="text-center relative z-0 flex items-center gap-2 rounded-lg border-[1px] 
        border-black px-4 py-2 font-semibold
        uppercase text-black transition-all duration-500 overflow-hidden
      "
    >
      <motion.div
        animate={{ rotate: 360, transition: { ease: 'linear', duration: 10, repeat: Infinity } }}
        className='absolute -z-10 -top-1/2 -right-1/2 bg-black h-96 w-96'
        style={{
          backgroundImage: "linear-gradient(0deg, rgb(46, 46, 46) 0%, rgb(46, 46, 46) 7%,rgb(55, 55, 55) 7%, rgb(55, 55, 55) 17%,rgb(63, 63, 63) 17%, rgb(63, 63, 63) 40%,rgb(72, 72, 72) 40%, rgb(72, 72, 72) 42%,rgb(80, 80, 80) 42%, rgb(80, 80, 80) 56%,rgb(89, 89, 89) 56%, rgb(89, 89, 89) 63%,rgb(97, 97, 97) 63%, rgb(97, 97, 97) 100%),linear-gradient(90deg, rgb(46, 46, 46) 0%, rgb(46, 46, 46) 7%,rgb(55, 55, 55) 7%, rgb(55, 55, 55) 17%,rgb(63, 63, 63) 17%, rgb(63, 63, 63) 40%,rgb(72, 72, 72) 40%, rgb(72, 72, 72) 42%,rgb(80, 80, 80) 42%, rgb(80, 80, 80) 56%,rgb(89, 89, 89) 56%, rgb(89, 89, 89) 63%,rgb(97, 97, 97) 63%, rgb(97, 97, 97) 100%),linear-gradient(22.5deg, rgb(46, 46, 46) 0%, rgb(46, 46, 46) 7%,rgb(55, 55, 55) 7%, rgb(55, 55, 55) 17%,rgb(63, 63, 63) 17%, rgb(63, 63, 63) 40%,rgb(72, 72, 72) 40%, rgb(72, 72, 72) 42%,rgb(80, 80, 80) 42%, rgb(80, 80, 80) 56%,rgb(89, 89, 89) 56%, rgb(89, 89, 89) 63%,rgb(97, 97, 97) 63%, rgb(97, 97, 97) 100%),linear-gradient(90deg, rgb(93, 93, 93),rgb(177, 177, 177))",
          backgroundBlendMode: 'overlay,overlay,overlay,normal'
          // backgroundImage: "radial-gradient(circle at center center, rgb(252, 252, 252), rgb(82, 82, 82))"
          // backgroundImage: "radial-gradient(circle at center center, rgb(93, 60, 152),rgb(10, 3, 9))"
          // backgroundImage: 'repeating-linear-gradient(45deg, rgba(222, 235, 40, 0.05) 0px, rgba(222, 235, 40, 0.05) 1px, transparent 1px, transparent 11px, rgba(222, 235, 40, 0.05) 11px, rgba(222, 235, 40, 0.05) 12px, transparent 12px, transparent 32px), repeating-linear-gradient(90deg, rgba(222, 235, 40, 0.05) 0px, rgba(222, 235, 40, 0.05) 1px, transparent 1px, transparent 11px, rgba(222, 235, 40, 0.05) 11px, rgba(222, 235, 40, 0.05) 12px, transparent 12px, transparent 32px), repeating-linear-gradient(0deg, rgba(222, 235, 40, 0.05) 0px, rgba(222, 235, 40, 0.05) 1px, transparent 1px, transparent 11px, rgba(222, 235, 40, 0.05) 11px, rgba(222, 235, 40, 0.05) 12px, transparent 12px, transparent 32px), repeating-linear-gradient(135deg, rgba(222, 235, 40, 0.05) 0px, rgba(222, 235, 40, 0.05) 1px, transparent 1px, transparent 11px, rgba(222, 235, 40, 0.05) 11px, rgba(222, 235, 40, 0.05) 12px, transparent 12px, transparent 32px), linear-gradient(90deg, rgb(41, 27, 158), rgb(249, 77, 212))'
          // backgroundImage: 'repeating-radial-gradient(#e66465, #9198e5 20%)'
          // background: "conic-gradient(from 360deg at 50% 50%, brown 0deg 10deg, darkgoldenrod 10deg 20deg, chocolate 20deg 30deg)"
        }}
      />
      {/* <motion.div
        animate={{ rotate: 360, transition: { ease: 'linear', duration: 10, repeat: Infinity } }}
        className='absolute -z-10 bottom-0 left-0 bg-black h-96 w-96'
        style={{
          backgroundImage: "radial-gradient(circle at center center, rgb(252, 252, 252), rgb(82, 82, 82))"
          // backgroundImage: "radial-gradient(circle at center center, rgb(93, 60, 152),rgb(10, 3, 9))"
          // backgroundImage: 'repeating-linear-gradient(45deg, rgba(222, 235, 40, 0.05) 0px, rgba(222, 235, 40, 0.05) 1px, transparent 1px, transparent 11px, rgba(222, 235, 40, 0.05) 11px, rgba(222, 235, 40, 0.05) 12px, transparent 12px, transparent 32px), repeating-linear-gradient(90deg, rgba(222, 235, 40, 0.05) 0px, rgba(222, 235, 40, 0.05) 1px, transparent 1px, transparent 11px, rgba(222, 235, 40, 0.05) 11px, rgba(222, 235, 40, 0.05) 12px, transparent 12px, transparent 32px), repeating-linear-gradient(0deg, rgba(222, 235, 40, 0.05) 0px, rgba(222, 235, 40, 0.05) 1px, transparent 1px, transparent 11px, rgba(222, 235, 40, 0.05) 11px, rgba(222, 235, 40, 0.05) 12px, transparent 12px, transparent 32px), repeating-linear-gradient(135deg, rgba(222, 235, 40, 0.05) 0px, rgba(222, 235, 40, 0.05) 1px, transparent 1px, transparent 11px, rgba(222, 235, 40, 0.05) 11px, rgba(222, 235, 40, 0.05) 12px, transparent 12px, transparent 32px), linear-gradient(90deg, rgb(41, 27, 158), rgb(249, 77, 212))'
          // backgroundImage: 'repeating-radial-gradient(#e66465, #9198e5 20%)'
          // background: "conic-gradient(from 360deg at 50% 50%, brown 0deg 10deg, darkgoldenrod 10deg 20deg, chocolate 20deg 30deg)"
        }}
      /> */}
      <span>{text}</span>
    </button>
  )
}

export default RotatingGradientButton
