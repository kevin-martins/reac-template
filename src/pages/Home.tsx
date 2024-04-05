import React, { useEffect, useRef } from 'react'
import MovingCard from '../components/MovingCard'
import ScrollContent from '../components/ScrollContent'
import HorizontalScroll from '../components/HorizontalScroll'
import SwipeCarousel from '../components/test'
import Partners from '../components/Partners'
import SlideText from '../components/text/SlideText'
import Reviews from '../components/review/Reviews'
import { RiCheckLine } from 'react-icons/ri'
import FAQs from '../components/faq/FAQs'
import { motion } from 'framer-motion'
import DynamicBackground from '../components/DynamicBackground'
import FadingText from '../components/text/FadingText'

const data = [
  {
    text: "Découvrez notre collection exclusive de chapeaux pour chats volants ! 🐱✈️",
  },
  {
    text: "Transformez votre jardin en jungle urbaine avec nos plantes géantes ! 🌿🏙️",
  },
  {
    text: "Essayez notre café magique qui vous donne des super pouvoirs ! ☕✨",
  },
  {
    text: "Voyagez dans le temps avec nos machines à remonter le temps de poche ! ⏰🚀",
  },
  {
    text: "Participez à notre concours de danse des pingouins pour gagner un igloo de luxe ! 🐧❄️",
  }
];


const infoVariants = {
  hidden: { y: -30, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

type ElementsProps = {
  text: string
};

const Elements = (element: ElementsProps) => {
  return (
    <motion.li
      variants={infoVariants}
      className="flex flex-row gap-[.5px]"
    >
      <RiCheckLine fill='green' className='my-auto' size={20} />
      <p>{element.text}</p>
    </motion.li>
  );
};

const Shutter = () => {
  return (
    <motion.ul
      variants={wrapperVariants}
      initial='hidden'
      animate='show'
      className='flex flex-col text-slate-200'
    >
      {data.map((element, i) => (
        <Elements key={i} {...element} />
      ))}
    </motion.ul>
  );
};

const wrapperVariants = {
  show: {
    transition: { staggerChildren: 0.25 }
  }
};

const Home = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 h-screen place-content-center lg:px-4 lg:py-20">
        <div className='hidden lg:block lg:m-auto'>
          <h1 className='text-3xl scale-y-125'>Fermeture Sans Souci,</h1>
          <p className='text-xl'>Votre professionnel de la fermeture en Essonnes</p>
          
        </div>
      </div>
    </>
  );
};

export default Home;
