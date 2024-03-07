import React, { useRef } from 'react'
import { partners } from "../constants/partners"
import { motion, useInView } from 'framer-motion'

const Partners = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <div className='grid grid-cols-3 gap-10 w-max mx-auto pt-8'>
      {partners.map((partner, i) => (
        <motion.img
          key={i}
          src={'/logos/' + partner.url + '.svg'}
          alt={partner.alt}
          width={200}
          ref={ref}
          style={{
            transform: isInView ? "scale(1, 1)" : "scale(0, 0)",
            transition: `all .6s cubic-bezier(0.17, 0.55, 0.55, 1) ${.4 + ((i + 1) * .4)}`
          }}
          className='w-content m-auto'
        />
      ))}
    </div>
  )
}

export default Partners