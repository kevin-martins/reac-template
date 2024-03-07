import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const questionVariants = {
  open: {
    // rotate: 180,
    color: "rgba(3, 6, 23, 0)"
  },
  close: {
    // rotate: 0,
    color: "rgb(255, 255, 255)"
  }
}

const arrowVariants = {
  open: {
    rotate: 180,
    color: "rgb(124, 58, 237)"
  },
  close: {
    rotate: 0,
    color: "rgb(255, 255, 255)"
  }
}

const QuestionAnswer = ({ question, answer }) => {
  const [isClicked, setIsClicked] = useState(false)
  const onClick = () => {
    setIsClicked(prev => !prev)
  }
  return (
    <div className="border-b-[1px] border-b-slate-300">
      <button
        className="flex w-full items-center justify-between gap-4 py-6"
        onClick={onClick}
      >
        <motion.span
          variants={questionVariants}
          animate={isClicked ? 'open': 'close' }
          className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-left text-lg font-medium"
        >
          {question}
        </motion.span>
        <motion.span
          variants={arrowVariants}
          animate={isClicked ? 'open': 'close' }
        >
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isClicked && <motion.div
          initial={{ height: 0, marginBottom: 0 }}
          animate={{ height: "fit-content", marginBottom: 24 }}
          exit={{ height: 0, marginBottom: 0 }}
          // variants={{ show: { height: "fit-content", marginBottom: 24 } }}
          className="overflow-hidden text-slate-300" //height: 0px; margin-bottom: 0px; => height: fit-content; margin-bottom: 24px;
        >
          <p>{answer}</p>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}

const data = [
  {
    question: "Comment prendre contact avec Fermeture Sans Souci ?",
    answer: "Fermeture Sans Souci est joignable par téléphone au 01.60.88.94.94 ou par l'e-mail à l'adresse suivante: fermetures.sans.souci@gmail.com"
  },
  {
    question: "Quels sont les horaires d’ouverture de Sans Souci ?",
    answer: "Fermeture Sans Souci est ouvert du Lundi au Vendredi de 09:00 à 12:00 puis de 13:30 à 18:00 "
  },
  {
    question: "Quels sont les avis des internautes à propos de Sans Souci ?",
    answer: "D'après les avis Google Maps, les internautes sont très satisfait par l'intervention de Fermeture Sans Souci"
  },
  {
    question: "Quelle est l'adresse de Sans Souci ?",
    answer: "Sans Souci est situé au 75 Fontainebleau, 91100 Corbeil Essonnes"
  }
]

const FAQs = () => {
  return (
    <div className="no-scrollbar relative w-full overflow-hidden" style={{ display: "block" }}>
      <div className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h3 className="mb-4 text-center text-3xl font-semibold">
            Questions fréquentes
          </h3>
          {data.map((d, i) => (
            <QuestionAnswer key={i} {...d} i={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQs
