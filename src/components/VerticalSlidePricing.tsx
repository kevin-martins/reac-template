import { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PricingButtonProps = {
  text: string,
  selected: boolean,
  setSelected: Dispatch<SetStateAction<string>>;
};

const PricingButton = ({
  text,
  selected,
  setSelected,
}: PricingButtonProps) => (
  <button
    onClick={() => setSelected(text)}
    className={`${
      selected
        ? " text-white dark:text-black"
        : "text-black dark:text-white hover:bg-neutral-300 dark:hover:bg-slate-700 transition-colors"
    } font-medium rounded-lg py-3 w-28 relative`}
  >
    {text}
    {selected && (
      <motion.span
        layoutId="pill-tab"
        transition={{ type: "spring", duration: 0.5 }}
        className="absolute inset-0 bg-black dark:bg-white rounded-lg -z-10"
      />
    )}
  </button>
);

const MovingArrow = () => (
  <div className="absolute -right-[100px] top-2 sm:top-0">
    <motion.svg
      width="95"
      height="62"
      viewBox="0 0 95 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        scale: [.75, .72, .75],
        rotate: [0, 3, 0]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
    >
      <path d="M14.7705 15.8619C33.2146 15.2843 72.0772 22.1597 79.9754 54.2825" stroke="#7D7BE5" strokeWidth="3" />
      <path d="M17.7987 7.81217C18.0393 11.5987 16.4421 15.8467 15.5055 19.282C15.2179 20.3369 14.9203 21.3791 14.5871 22.4078C14.4728 22.7608 14.074 22.8153 13.9187 23.136C13.5641 23.8683 12.0906 22.7958 11.7114 22.5416C8.63713 20.4812 5.49156 18.3863 2.58664 15.9321C1.05261 14.6361 2.32549 14.1125 3.42136 13.0646C4.37585 12.152 5.13317 11.3811 6.22467 10.7447C8.97946 9.13838 12.7454 8.32946 15.8379 8.01289" stroke="#7D7BE5" strokeWidth="3" strokeLinecap="round" />
    </motion.svg>
    <span className="block text-xs w-fit bg-indigo-500 text-white shadow px-1.5 py-0.5 rounded -mt-1 ml-8 -rotate-2 font-light italic">Save $$$</span>
  </div>
);

const tabs = ['Monthly', 'Annual'];

type PricingWrapperProps = {
  selected: string,
  setSelected: Dispatch<SetStateAction<string>>;
};

const PricingWrapper = ({ selected, setSelected }: PricingWrapperProps) => (
  <div className="flex items-center justify-center gap-3">
    {tabs.map((tab, i) => {
      if (i !== tabs.length - 1) {
        return (
          <PricingButton key={i} text={tab} selected={selected === tab} setSelected={setSelected} />
        )
      } else {
        return (
          <div key={i} className="relative">
            <PricingButton text={tab} selected={selected === tab} setSelected={setSelected} />
            <MovingArrow />
          </div>
        )
      }
    })}
  </div>
);

const pricingVariants = {
  initial: { y: -50, opacity: 0 },
  exit: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

type PricingAmountProps = {
  id: string
  price: number
  color?: string
};

const PricingAmount = ({ id, price, color = '#000' }: PricingAmountProps) => (
  <motion.p
    key={id}
    id={id}
    variants={pricingVariants}
    initial='initial'
    animate='show'
    exit='exit'
    className="text-6xl font-bold"
    style={{ color }}
  >
    <span>{price}€</span>
    <span className="font-normal text-xl">/month</span>
  </motion.p>
);

type CardProps = {
  title: string,
  subTitle: string,
  isBest?: boolean,
  price?: {
    monthly: number,
    annual: number
  },
  color?: string,
  benefits: { access: boolean, text: string }[]
};

type PricingCardProps = {
  card: CardProps,
  selected: string
};

const PricingCard = ({ card, selected }: PricingCardProps) => {
  return (
    <div className="relative w-full border-[1px] border-slate-700 bg-white p-6 rounded-xl">
      {card?.isBest &&
        <motion.span
          animate={{
            rotate: [35, 25, 35],
            x: [-5, 0, -5],
            transition: {
              duration: 10,
              repeat: Infinity
            }
          }}
          className='absolute text-lg z-10 border-[1px] px-3 py-1 rounded-lg border-black bg-white top-0 -right-8 font-medium'
          style={{ color: card.color }}
        >
          Best option
        </motion.span>
      }
      <p className="text-2xl font-bold mb-2">{card.title}</p>
      <p className="text-lg mb-6">{card.subTitle}</p>
        {card?.price
          ? <div className="overflow-hidden mb-8">
              <AnimatePresence mode='wait'>
                {
                  [
                    <PricingAmount key='monthly' id='monthly' price={card.price.monthly} color={card.color} />,
                    <PricingAmount key='annual' id='annual' price={card.price.annual} color={card.color} />
                  ][tabs.indexOf(selected)]
                }
              </AnimatePresence>
            </div>
          : <p
              className="text-6xl font-bold mb-8"
            >
              0€
              <span className="font-normal text-xl">/month</span>
            </p>
        }
      {card.benefits.map((benefit, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          {benefit.access
            ? <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z" fill="black" />
              </svg>
            : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M1 1L19 19" stroke="black" strokeWidth="2" />
                <path d="M1 19L19 1" stroke="black" strokeWidth="2" />
              </svg>
          }
          <span className="text-base">{benefit.text}</span>
        </div>
      ))}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-4 mt-8 font-semibold bg-black text-white rounded-lg uppercase"
        tabIndex={0}
        style={{ backgroundColor: card?.color }}
      >
        Sign up {card.title}
      </motion.button>
    </div>
  );
};

const pricingCards = [
  {
    title: "Free",
    subTitle: "The essentials",
    benefits: [
      { access: true, text: "Listen to music ad-supported" },
      { access: true, text: "Shuffle play" },
      { access: false, text: "Limited skips" },
      { access: false, text: "Standard audio quality" }
    ]
  },
  {
    title: "Premium",
    subTitle: "All the features",
    isBest: true,
    price: {
      monthly: 9.99,
      annual: 7.99
    },
    color: '#0d9488',
    benefits: [
      { access: true, text: "No ad interruptions" },
      { access: true, text: "Listen offline" },
      { access: true, text: "Unlimited skips" },
      { access: true, text: "Play any song" }
    ]
  },
  {
    title: "Family",
    subTitle: "For everyone",
    price: {
      monthly: 15.99,
      annual: 11.99
    },
    benefits: [
      { access: true, text: "6 Premium accounts" },
      { access: true, text: "Family Mix" },
      { access: true, text: "Parental controls" },
      { access: true, text: "Listen on multiple devices" }
    ]
  }
];

const VerticalSlidePricing = () => {
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <section className="relative w-full dark:text-white text-black px-4 lg:px-8 py-12 lg:py-24 overflow-hidden">
      <div className="dark:text-white mb-12 lg:mb-24 relative z-10">
        <h3 className="font-semibold text-5xl lg:text-7xl text-center mb-6">Pricing plans</h3>
        <p className="text-center mx-auto max-w-lg mb-8">Lorem ipsum dolor sit amet consectetur. Pulvinar eu rhoncus tincidunt eget mattis netus ridiculus.</p>
        <PricingWrapper selected={selected} setSelected={setSelected} />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full max-w-6xl mx-auto relative z-10">
        {pricingCards.map((card, i) => (
          <PricingCard key={i} card={card} selected={selected} />
        ))}
      </div>
      <motion.div
        animate={{
          rotate: 30,
          transition: {
            duration: 10,
            repeat: Infinity
          }
        }}
        className="w-[450px] h-[450px] rounded-full border-2 border-slate-500 dark:border-slate-100 border-dotted absolute z-0 -left-[250px] -top-[200px]"
      />
      <motion.div
        animate={{
          rotate: -30,
          transition: {
            duration: 10,
            repeat: Infinity
          }
        }}
        className="w-[450px] h-[450px] rounded-full border-2 border-slate-500 dark:border-slate-100 border-dotted absolute z-0 -right-[250px] -bottom-[200px]"
      />
    </section>
  );
};

export default VerticalSlidePricing;
