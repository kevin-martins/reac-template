import { Outlet } from "react-router-dom";
import { motion } from 'framer-motion';
import { LinkProps } from "../models/route";
import { useEffect, useState } from "react";

const staggerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const letterVariants = {
  hidden: { y: -20 },
  visible: { y: 0 }
};

const links: LinkProps[] = [
  {
    to: '#',
    text: 'Home'
  },
  {
    to: '#/components',
    text: 'Components'
  }
];

const NavigationLink = (link: LinkProps) => {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHover(false);
    }, 100)
  }, [isHover])
  return (
    <motion.a
      key={link.text}
      href={link.to}
      variants={staggerVariants}
      onMouseEnter={() => setIsHover(true)}
      animate={isHover ? "hidden" : "visible"}
      className='inline-flex ml-5'
    >
      {link.text.split('').map((letter, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="font-[FontAwesome] pointer-events-none"
        >
          {letter}
        </motion.span>
      ))}
    </motion.a>
  )
}

const NavBar = () => {
  return (
    <div className='fixed h-[54px] z-50 w-full bg-slate-700 shadow-lg text-white flex items-center'>
      {links.map((link, i) => (
        <NavigationLink key={i} {...link} />
      ))}
    </div>
  );
};

const Root = () => {
  return (
    <main className="h-full">
      <NavBar />
      <div className="relative px-3 col-span-1">
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
