import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const questionVariants = {
  open: {
    fontSize: '1.2rem'
  },
  close: {
    fontSize: '1.125rem'
  }
};

const arrowVariants = {
  open: {
    rotate: 180
  },
  close: {
    rotate: 0
  }
};

type QuestionAnswerProps = {
  question: string,
  answer: string
};

const QuestionAnswer = ({ question, answer }: QuestionAnswerProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(prev => !prev)
  };
  return (
    <div className="border-b-[1px] border-b-slate-500 dark:border-b-slate-300">
      <button
        className="flex w-full items-center justify-between gap-4 py-6"
        onClick={onClick}
      >
        <motion.span
          variants={questionVariants}
          animate={isClicked ? 'open': 'close' }
          className="text-left font-medium"
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
          className="overflow-hidden text-slate-700 dark:text-slate-300"
        >
          <p>{answer}</p>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
};

const data = [
  {
    question: "Quelle est la meilleure façon de cuisiner des légumes verts ?",
    answer: "Pour des légumes verts savoureux, essayez de les cuire à la vapeur pendant quelques minutes et assaisonnez-les avec un filet d'huile d'olive et un peu de sel."
  },
  {
    question: "Comment puis-je améliorer ma productivité au travail ?",
    answer: "Pour améliorer votre productivité, essayez de planifier votre journée à l'avance, de limiter les distractions et de prendre des pauses régulières pour vous ressourcer."
  },
  {
    question: "Quels sont les bienfaits de la méditation ?",
    answer: "La méditation peut aider à réduire le stress, à améliorer la concentration et à favoriser le bien-être mental et émotionnel."
  },
  {
    question: "Quel est le meilleur moyen de rester en forme et en bonne santé ?",
    answer: "Pour rester en forme et en bonne santé, il est recommandé de maintenir une alimentation équilibrée, de faire de l'exercice régulièrement et de dormir suffisamment."
  }
];


const FAQs = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h3 className="mb-4 text-center text-3xl font-semibold">
            Questions fréquentes
          </h3>
          {data.map((d, i) => (
            <QuestionAnswer key={i} {...d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
