import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

const routes = [
  {
    title: 'Pricing Plan',
    links: [
      { to: '#/components/subscription', text: 'Subscriptions' }
    ]
  },
  {
    title: 'Support',
    links: [
      { to: '#/components/faq', text: 'FAQ' },
      { to: '#/components/contact', text: 'Contacts' },
      { to: '#/components/review', text: 'Reviews' },
      { to: '#/components/testimonial', text: 'Testimonials' }
    ]
  },
  {
    title: 'Components',
    links: [
      { to: '#/components/loading', text: 'Loadings' },
      { to: '#/components/text', text: 'Texts' },
      { to: '#/components/modal', text: 'Modals' }
    ]
  },
  {
    title: 'Presentations',
    links: [
      { to: '#/components/carousel', text: 'Carousels' },
      { to: '#/components/table', text: 'Tables' },
      { to: '#/components/list', text: 'Lists' },
      { to: '#/components/card', text: 'Cards' }
    ]
  },
  {
    title: 'User Intefactions',
    links: [
      { to: '#/components/slider', text: 'Sliders' },
      { to: '#/components/button', text: 'Buttons' },
      // { to: '#/components/toggle', text: 'Toggles' },
      { to: '#/components/link', text: 'Links' },
      { to: '#/components/dropdown', text: 'Dropdowns' }
    ]
  },
  {
    title:'Others',
    links: [
      { to: '#/components/notification', text: 'Notifications' }
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


const Components = () => {
  const { pathname } = useLocation();
  return (
    <div className="md:grid md:grid-cols-[200px_calc(100%_-_200px)]">
      <nav className="scrollbar-none sticky top-[54px] col-span-1 hidden h-[calc(100vh_-_54px)] flex-col gap-1 overflow-y-scroll bg-white px-3 py-6 md:flex">
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
  );
};

export default Components;
