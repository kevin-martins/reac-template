import { routes } from '../constants/routes';
import { LinkProps } from '../models/route';
import { motion } from 'framer-motion';

const ComponentPage = () => {
  return (
    <div className=''>
      <h2 className='text-4xl mb-8'>All components available</h2>
      <p className='max-w-2xl'>Components are build to support React.js, TailwindCSS and framer-motion. The site is still in development so components are not available for personal use but you can still check them out !</p>
      <div className='space-y-5 mb-10'>
        {routes
          .map(route => (
            <section key={route.title}>
              <h2 className='text-2xl mb-3 text-slate-400'>{route.title}</h2>
              <div className='flex flex-wrap gap-10 ml-5'>
                {route.links.map(link => {
                  return (
                    <motion.div
                      key={link.text}

                      className='relative grid place-content-center h-14 w-44 border border-black rounded-lg
                        before:absolute before:content-[&quot;&quot;]
                        before:scale-[.5] before:bg-black before:inset-0
                        before:translate-x-[0%] before:-z-10 before:rounded-[100%]
                      '
                    >
                      {/* <div
                        className='bg-blue-500 h-[48px] w-[168px] rounded-lg text-white'
                      >
                        hello
                      </div> */}
                      {/* <a
                        href={link.to}
                        className='block text-center bg-blue-500'
                      >
                        {link.text}
                      </a> */}
                    </motion.div>
                  )
                })}
              </div>
            </section>
          ))
        }
      </div>
    </div>
  );
};

export default ComponentPage;
