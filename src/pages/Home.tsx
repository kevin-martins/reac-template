import React, { useEffect, useRef } from 'react'
import MovingCard from '../components/MovingCard'
import Footer from '../components/Footer'
import ScrollContent from '../components/ScrollContent'
import HorizontalScroll from '../components/HorizontalScroll'
import SwipeCarousel from '../components/test'
import Partners from '../components/Partners'
import TextSection from '../components/text/TextSection'
import Reviews from '../components/review/Reviews'
import HomeCard from '../components/HomeCard'
import { RiCheckLine } from 'react-icons/ri'
import FAQs from '../components/faq/FAQs'
import { motion } from 'framer-motion'
import DynamicBackground from '../components/DynamicBackground'
import DynamicText from '../components/text/DynamicText'

const data = [
  {
    text: "Devis gratuit 100% gratuit !",
  },
  {
    text: "Installation et paramétrage d'alarmes et de systèmes domotiques",
  },
  {
    text: "Remplacement de vitres et vitrines",
  },
  {
    text: "Pose, réglage et réparation de store et volet roulant",
  },
  {
    text: "Intervention en urgence 24/24",
  }
]

const infoVariants = {
  hidden: { y: -30, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

type ElementsProps = {
  text: string
}

const Elements = (d: ElementsProps) => {
  return (
    <motion.li
      variants={infoVariants}
      className="flex flex-row gap-[.5px]"
    >
      <RiCheckLine fill='green' className='my-auto' size={20} />
      <p>{d.text}</p>
    </motion.li>
  )
}

const wrapperVariants = {
  show: {
    transition: { staggerChildren: 0.25 }
  }
}

const Home = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 h-screen place-content-center lg:px-4 lg:py-20">
        <div className='hidden lg:block lg:m-auto'>
          <h1 className='text-3xl scale-y-125'>Fermeture Sans Souci,</h1>
          <p className='text-xl'>Votre professionnel de la fermeture en Essonnes</p>
          <motion.ul
            variants={wrapperVariants}
            initial='hidden'
            animate='show'
            className='flex flex-col text-slate-200'
          >
            {data.map((d, i) => (
              <Elements key={i} {...d} />
            ))}
          </motion.ul>
        </div>
        <MovingCard>
          <HomeCard />
        </MovingCard>
      </div>
      <DynamicBackground />
      <DynamicText />
      <TextSection
        title="l'Entreprise"
        text="Sans Souci, votre spécialiste pour effectuer la pose de volets roulants en Essonne ! 
          Confiez-nous votre projet et profitez de nos 26 années d'expériences dans ce domaine 
          pour assurer la sécurité de votre habitation. Forts de notre expérience, nous réalisons 
          également votre installation domotique, que vous soyez sur Évry ou dans l'Essonne. 
          Nous vous garantissons plusieurs prestations soignées réalisées dans le respect des 
          délais pour vous apporter entière satisfaction. Nous sommes à votre écoute. Contactez-nous !"
      />
      <ScrollContent />
      {/* <SwipeCarousel /> */}
      {/* <HorizontalScroll /> */}
      <TextSection
        title='Nos Partenaires'
          text="Voici un aperçu des entreprises avec lesquelles nous collaborons, chacune étant 
            un expert reconnu dans son domaine respectif. Elles s'engagent à offrir le meilleur 
            rapport qualité-prix, soutenu par des garanties inclus pouvant s'étendre sur plus de 10 ans."
      />
      <Partners />
      {/* <i className="text-yellow-500 w-10 fas fa-star" style={{ fontSize: '1rem' }} /> */}
      <Reviews />
      <FAQs />
      <Footer />
    </>
  )
}

export default Home
