import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import { motion } from 'framer-motion';

const routes = [
  {
    title: 'Pricing Plan',
    links: [
      { to: '/react-template/subscription', text: 'Subscriptions' }
    ]
  },
  {
    title: 'Support',
    links: [
      { to: '/react-template/faq', text: 'FAQ' },
      { to: '/react-template/contact', text: 'Contacts' },
      { to: '/react-template/review', text: 'Reviews' }
    ]
  },
  {
    title: 'Components',
    links: [
      { to: '/react-template/loading', text: 'Loadings' },
      { to: '/react-template/text', text: 'Texts' },
      { to: '/react-template/modal', text: 'Modals' }
    ]
  },
  {
    title: 'Presentations',
    links: [
      { to: '/react-template/table', text: 'Tables' },
      { to: '/react-template/card', text: 'Cards' }
    ]
  },
  {
    title: 'User Intefactions',
    links: [
      { to: '/react-template/slider', text: 'Sliders' },
      { to: '/react-template/button', text: 'Buttons' },
      { to: '/react-template/link', text: 'Links' },
      { to: '/react-template/dropdown', text: 'Dropdowns' }
    ]
  }
];

const Root = () => {
  return (
    <main>
      <NavBar />
      <div className="grid grid-container">
        <nav className="scrollbar-none sticky top-[54px] left-nav-position col-span-1 hidden h-full flex-col gap-1 overflow-y-scroll border-r-2 border-slate-300 px-3 py-6 md:flex">
          {routes.map((route, i) => {
            return (
              <div key={i}>
                <span className="text-neutral-400">{route.title}</span>
                {route.links.map((link, j) => (
                  <motion.a
                    key={j}
                    href={link.to}
                    whileHover={{ x: 10, transition: { duration: .3 } }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-0 flex px-2.5 py-1 transition-colors duration-300 overflow-hidden
                      before:absolute before:inset-0
                      before:-z-10 before:translate-x-[-180%]
                      before:scale-[2.5]
                      before:rounded-[100%] before:bg-slate-800
                      before:transition-transform before:duration-500
                      before:content-[&quot;&quot;]
                      hover:scale-105 hover:text-white
                      hover:before:translate-x-[0%]
                    "
                  >
                    {link.text}
                  </motion.a>
                ))}
              </div>
            )
          })}
        </nav>
        <div className="px-3 col-span-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Root;
