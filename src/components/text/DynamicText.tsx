import React from 'react';
import { motion } from 'framer-motion';

const DynamicText = () => {
  return (
    <>
      <motion.section
        variants={wrapperVariants}
        initial='hidden'
        animate='show'
        className='text-white'
      >
        {"Sans Souci, votre spécialiste pour effectuer la pose de volets roulants en Essonne ! Confiez-nous votre projet et profitez de nos 26 années d'expériences dans ce domaine pour assurer la sécurité de votre habitation. Forts de notre expérience, nous réalisons également votre installation domotique, que vous soyez sur Évry ou dans l'Essonne. Nous vous garantissons plusieurs prestations soignées réalisées dans le respect des délais pour vous apporter entière satisfaction. Nous sommes à votre écoute. Contactez-nous !".split('').map((letter, i) => (
          <motion.span
            key={i}
            variants={imageVariants}
            className='text-white ease-in-out transition-all duration-500'
          >
            {letter}
          </motion.span>
        ))}
      </motion.section>
      
    </>
  )
}

export default DynamicText;

const wrapperVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.005 }
  }
}

const imageVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}
