import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { routes } from '../constants/routes';
import { useEffect, useState } from 'react';
import { LinkProps } from '../models/route';

const linkVariants = {
  close: {
    x: 0,
    transition: {
      duration: .3
    }
  },
  open: {
    x: 10,
    transition: {
      duration: .3
    }
  }
};

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
    <div className='fixed h-[54px] top-0 z-50 w-full bg-slate-700 shadow-lg text-white flex items-center'>
      {links.map((link, i) => (
        <NavigationLink key={i} {...link} />
      ))}
    </div>
  );
};

const Components = () => {
  const { pathname } = useLocation();
  return (
    <>
      <NavBar />
      <div className="block md:grid md:grid-cols-[200px_calc(100%_-_200px)]">
        <nav className="scrollbar-none sticky mt-[54px] top-[54px] col-span-1 hidden h-[calc(100vh_-_54px)] flex-col gap-1 overflow-y-scroll bg-white px-3 py-6 md:flex">
          {routes.map((route, i) => {
            return (
              <div key={i}>
                <span className="text-neutral-400">{route.title}</span>
                {route.links.map((link, j) => (
                  <motion.a
                    key={j}
                    href={link.to}
                    variants={linkVariants}
                    whileHover='open'
                    animate={link.to === '#'+pathname ? 'open' : 'close' }
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-0 flex px-2.5 py-1 transition-colors duration-300 overflow-hidden
                      before:absolute before:inset-0
                      before:-z-10 before:translate-x-[-180%]
                      before:scale-[2.5]
                      before:rounded-[100%] before:bg-slate-800
                      before:transition-transform before:duration-500
                      before:content-[&quot;&quot;]
                      hover:scale-105 hover:text-white
                      hover:before:translate-x-[0%]
                      ${link.to === '#'+pathname ? 'bg-slate-800 text-white' : ''}
                    `}
                  >
                    {link.text}
                  </motion.a>
                ))}
              </div>
            )
          })}
        </nav>
        <div className="relative px-3 mt-20 col-span-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Components;
