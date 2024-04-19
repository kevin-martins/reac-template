import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import { motion } from 'framer-motion';
import { useState } from "react";

const routes = [
  {
    title: 'Pricing Plan',
    links: [
      { to: '#/subscription', text: 'Subscriptions' }
    ]
  },
  {
    title: 'Support',
    links: [
      { to: '#/faq', text: 'FAQ' },
      { to: '#/contact', text: 'Contacts' },
      { to: '#/review', text: 'Reviews' },
      { to: '#/testimonial', text: 'Testimonials' }
    ]
  },
  {
    title: 'Components',
    links: [
      { to: '#/loading', text: 'Loadings' },
      { to: '#/text', text: 'Texts' },
      { to: '#/modal', text: 'Modals' }
    ]
  },
  {
    title: 'Presentations',
    links: [
      { to: '#/table', text: 'Tables' },
      { to: '#/list', text: 'Lists' },
      { to: '#/card', text: 'Cards' },
      { to: '#/title', text: 'Titles' }
    ]
  },
  {
    title: 'User Intefactions',
    links: [
      { to: '#/slider', text: 'Sliders' },
      { to: '#/button', text: 'Buttons' },
      // { to: '#/toggle', text: 'Toggles' },
      { to: '#/link', text: 'Links' },
      { to: '#/dropdown', text: 'Dropdowns' }
    ]
  }
];

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

const Root = () => {
  const { pathname } = useLocation();
  return (
    <main className="h-full">
      {/* <NavBar /> */}
      <div className="block h-full md:grid md:grid-cols-[200px_calc(100%_-_200px)]">
        <nav className="scrollbar-none sticky top-0 col-span-1 hidden h-[calc(100vh_-_54px)] flex-col gap-1 overflow-y-scroll bg-white px-3 py-6 md:flex">
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
    </main>
  );
};

export default Root;
