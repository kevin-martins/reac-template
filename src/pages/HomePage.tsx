import React from 'react'
import { motion } from 'framer-motion'
import CircleFillButton from '../components/buttons/CircleFillButton'

const wrapperVariants = {
  open: {
    transition: { ease: "easeIn", staggerChildren: .3 }
  }
}

const textVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  hidden: {
    y: 50,
    opacity: 0
  }
}

const anchorVariants = {
  open: {
    scale: 1,
    opacity: 1
  },
  hidden: {
    scale: 0,
    opacity: 0
  }
}

const HomePage = () => {
  const calculatePosition = (percentPos: number) => {
    return `${Math.round((window.innerWidth * percentPos) / 32) * 32}px`
  }
  return (
    <div className='relative text-black'>
      <section className="relative overflow-hidden bg-zinc-950 z-20 h-screen grid place-content-center">
        <motion.div
          // initial={{ y: 50, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          initial="hidden"
          animate="open"
          variants={wrapperVariants}
          className='relative mx-auto max-w-7xl text-white z-50 text-center'
        >
          <motion.h1
            variants={textVariants}
            className='lg:text-6xl text-4xl'
          >
            Animated Components
          </motion.h1>
          <motion.p
            variants={textVariants}
            className='lg:text-xl sm:text-base text-sm mt-1'
          >
            My personal website for storing templates
          </motion.p>
          <motion.a
            variants={anchorVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            href="#/components"
            className='block relative mx-auto lg:mt-7 mt-3 py-3 lg:px-10 px-6 lg:text-lg text-sm w-fit z-0 rounded-full border border-black overflow-hidden bg-slate-800 text-white font-medium hover:text-black
              before:absolute before:bg-slate-200 before:-z-10
              before:content-[""] before:inset-0 before:rounded-full
              before:-translate-x-[110%] hover:before:translate-x-[0%] before:duration-300
              active:scale-95 hover:scale-105
            '
          >
            Components
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ top: 80, left: calculatePosition(.12), y: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 0], y: 542, transition: { repeat: Infinity, duration: 5, repeatDelay: 2, delay: 2 } }}
          className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
        />
        <motion.div
          initial={{ top: 200, left: calculatePosition(.23), y: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 0], y: 284, transition: { repeat: Infinity, duration: 3, repeatDelay: 4, delay: 1 } }}
          className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
        />
        <motion.div
          initial={{ top: 54, left: calculatePosition(.38), y: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 0], y: 380, transition: { repeat: Infinity, duration: 2, repeatDelay: 4.5, delay: 3 } }}
          className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
        />
        <motion.div
          initial={{ top: 450, left: calculatePosition(.54), y: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 0], y: 740, transition: { repeat: Infinity, duration: 4, repeatDelay: 2, delay: 1.4 } }}
          className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
        />
        <motion.div
          initial={{ top: 125, left: calculatePosition(.76), y: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 0], y: 420, transition: { repeat: Infinity, duration: 3, repeatDelay: 1, delay: .6 } }}
          className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
        />
        <motion.div
          initial={{ top: 267, left: calculatePosition(.88), y: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 0], y: 684, transition: { repeat: Infinity, duration: 6, repeatDelay: 3, delay: 2.2 } }}
          className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
        />
        <div className="absolute inset-0 z-0" style={{ opacity: 1 }}>
          <div className="absolute inset-0 z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 58 138 / 0.5)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E\")" }} />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950/90" />
        </div>
      </section>
    </div>
  )
}

export default HomePage
