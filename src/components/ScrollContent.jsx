import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { businessFields } from '../constants/business-fields'
import React, { useRef } from 'react'

const ImageContent = ({ imageUrl, imageAlt, i }) => (
  <div className='relative lg:w-1/2 px-2 md:px-10 lg:p-0'>
    <img
      className={`object-cover rounded-lg ${i % 2 === 0 ? 'picture-deformation-r lg:rounded-r-lg' : 'picture-deformation-l lg:rounded-l-lg'} `}
      src={imageUrl}
      alt={imageAlt}
    />
  </div>
)

const ContentElement = ({ field, i }) => {
  const wrapperRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'center center']
  })
  const fromRight = useTransform(scrollYProgress, [0, 1], ['-20%', '0%'])
  const fromLeft = useTransform(scrollYProgress, [0, 1], ['20%', '0%'])

  const isOdd = i % 2 !== 0

  return (
    <motion.div
      className='relative overflow-hidden max-w-6xl mx-auto lg:my-auto flex flex-col lg:flex-row'
      ref={wrapperRef}
      style={{ translateX: isOdd ? fromRight : fromLeft }}
    >
      {isOdd && <ImageContent imageUrl={field.image} imageAlt={field.alt} i={i} />}
      <div className='absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 lg:relative lg:top-auto lg:right-auto lg:translate-y-1/4 lg:translate-x-0 z-10 lg:w-1/2 '>
        <div className='flex flex-col h-full text-center items-center rounded-lg px-12 py-3 bg-slate-800/70 lg:bg-transparent'>
          <h1 className='text-4xl tracking-tight font-extrabold text-slate-100 lg:text-left xl:text-6xl'>
            <span className='block xl:inline'>
              {field.title}
              {' '}
            </span>
            <span className='block text-yellow-500 xl:inline'>
              {field.highlight}
            </span>
          </h1>
          <p className='mt-3 text-xs sm:text-base mx-5 text-slate-200 lg:text-slate-400 sm:mt-5 md:text-lg sm:max-w-xl lg:text-left md:mt-5 xl:text-xl'>
            {field.description}
          </p>
          <div className='mt-5 sm:mt-8 flex justify-center lg:justify-start gap-3'>
            <a
              href={field.photo}
              className="px-7 py-4 relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
                border-neutral-500 font-medium
                text-slate-100 transition-all duration-300
                before:absolute before:inset-0
                before:-z-10 before:translate-y-[200%]
                before:scale-[2.5]
                before:rounded-[100%] before:bg-yellow-600
                before:transition-transform before:duration-1000
                before:content-[&quot;&quot;]
                hover:scale-105 hover:border-yellow-600 hover:text-slate-300
                hover:before:translate-y-[0%]
                active:scale-100"
            >
              voir les photos
            </a>
            <a
              href={field.photo}
              className={`px-7 py-4 relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
                border-yellow-600 font-medium
                text-slate-300 transition-all duration-300
                before:absolute before:inset-0
                before:-z-10 before:translate-x-[0%] before:translate-y-[0%]
                before:scale-[2.5]
                before:rounded-full before:bg-yellow-600
                before:transition-transform before:duration-1000
                before:content-[&quot;&quot;]
                hover:scale-105 hover:border-neutral-500 hover:text-slate-100
                hover:before:translate-y-[200%] hover:before:translate-x-[${isOdd ? '' : '-' }200%]
                active:scale-100`}
            >
              prendre contact
            </a>
          </div>
        </div>
      </div>
      {i % 2 === 0 && <ImageContent imageUrl={field.image} imageAlt={field.alt} i={i} />}
    </motion.div >
  )
}

const ScrollContent = () => {
  return (
    <motion.section
      className='flex flex-col gap-12 my-20'
    >
      {businessFields.map((field, i) => (
        <ContentElement key={i} field={field} i={i} />
      ))}
    </motion.section>
  )
}

export default ScrollContent;
