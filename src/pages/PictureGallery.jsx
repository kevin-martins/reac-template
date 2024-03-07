import React from 'react';
import { galeryImages } from '../constants/galery-pictures';
import { motion } from 'framer-motion';

const PictureGallery = () => {
  return (
    <>
      <motion.section
        variants={wrapperVariants}
        initial='hidden'
        animate='show'
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-20 pb-10 gap-6'
      >
        {galeryImages.map((image, i) => (
          <motion.img
            key={i}
            variants={imageVariants}
            src={'/assets/' + image.url + '.png'}
            alt={image.url}
            className='hover:rounded-lg ease-in-out transition-all duration-500 scale-95 hover:scale-105'
          />
        ))}
      </motion.section>
      
    </>
  )
}

{/* <div className='relative z-0 flex items-center overflow-hidden rounded-lg scale-95
transition-all duration-500 scale-95 hover:scale-100

before:absolute before:inset-0
before:z-10 before:translate-y-[55%] before:scale-x-[1] before:scale-y-[0.01]
before:bg-neutral-500/30
before:transition-transform before:duration-1000
before:content-[&quot;]

hover:scale-100 hover:before:scale-y-[2.5]'
> */}
{/* <div className='relative z-0 flex items-center overflow-hidden rounded-lg scale-95
          transition-all duration-500
          
          before:absolute before:inset-0
          before:z-10 before:translate-x-[0%] before:translate-y-[0%] before:scale-[3]
          before:rounded-[100%] before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20
          before:transition-transform before:duration-1000
          before:content-[&quot;]

          hover:scale-100 hover:before:translate-x-[-250%] hover:before:translate-y-[-250%]'
        >
          <motion.img
            key={i}
            variants={imageVariants}
            src={image.url}
            alt={image.url}
            className='relative galery-deformation hover:rounded-lg ease-out transition-all duration-400'
          />
        </div> */}

export default PictureGallery;

const wrapperVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const imageVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}
