// import { Dispatch, SetStateAction, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { LuPhoneCall } from "react-icons/lu";
// import { AnimatePresence, motion } from 'framer-motion';

// const underlineVariants = {
//   open: {
//     transform: 'scaleX(1)'
//   },
//   close: {
//     transform: 'scaleX(0)'
//   }
// };

// const cardVariants = {
//   open: {
//     opacity: 1,
//     transform: 'translateY(0px) translateX(-50%)',
//   },
//   close: {
//     opacity: 0,
//     transform: 'translateY(15px) translateX(-50%)',
//   }
// };

// const mobileVariants = {
//   close: {
//     x: 1000
//   }
// };

// const arrowVariants = {
//   open: {
//     rotate: 180,
//   },
//   close: {
//     rotate: 0,
//   }
// };

// type RouteProps = {
//   title: string,
//   links: { to: string, text: string }[]
// };

// type DataProps = {
//   title: string,
//   subtitle: string,
//   routes: RouteProps[]
// };

// const data: DataProps = {
//   title: "Our way of success",
//   subtitle: "Let's dive into how success come",
//   routes: [
//     {
//       title: "Main purpose",
//       links: [
//         { to: "", text: "Make it happens" },
//         { to: "", text: "Never give up" },
//         { to: "", text: "Stay focus"  }
//       ]
//     },
//     {
//       title: "Second chance",
//       links: [
//         { to: "", text: "Try again" },
//         { to: "", text: "Make friends" },
//         { to: "", text: "Learn on mistakes" },
//       ]
//     },
//     {
//       title: "Finally",
//       links: [
//         { to: "", text: "Be proud" },
//         { to: "", text: "Make money" },
//         { to: "", text: "Dream big" },
//         { to: "", text: "Try new" },
//       ]
//     }
//   ]
// };

// type MobileNavProps = {
//   data: DataProps,
//   isOpen: boolean,
//   setIsOpen: Dispatch<SetStateAction<boolean>>
// };

// const MobileNav = ({ data, isOpen, setIsOpen }: MobileNavProps) => {
//   const [isClicked, setIsClicked] = useState(false);
//   const handleClick = () => {
//     setIsClicked(prev => !prev);
//   }; 
//   return (
//     <motion.nav
//       variants={mobileVariants}
//       initial='close'
//       animate={{ x: 0 }}
//       exit='close'
//       className="fixed left-0 top-0 flex h-screen w-full flex-col bg-slate-900"
//     >
//       <div className="flex items-center justify-between p-6">
//         <div className="flex items-center gap-2">
//           <span className="text-2xl font-bold">Imaginary</span>
//           <svg width="50" height="39" viewBox="0 0 50 39" fill="black" xmlns="http://www.w3.org/2000/svg" className="w-10">
//             <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" stop-color="black" />
//             <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" stop-color="black" />
//           </svg>
//         </div>
//         <button onClick={() => setIsOpen(false)}>
//           <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-3xl text-white duration-300 hover:text-red-600 hover:rotate-90" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>
//       </div>
//       <div className="h-screen overflow-y-scroll bg-neutral-100 p-6 text-neutral-900">
//         <button
//           onClick={() => setIsOpen(false)}
//           className="flex w-full items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
//         >
//           <Link to="/">Accueil</Link>
//         </button>
//         <div className="relative">
//           <button
//             onClick={handleClick}
//             className="flex w-full items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
//           >
//             <span>Nos Réalisations</span>
//             <motion.span
//               variants={arrowVariants}
//               animate={isClicked ? 'open': 'close' }
//             >
//               <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                 <polyline points="6 9 12 15 18 9" />
//               </svg>
//             </motion.span>
//           </button>
//           <AnimatePresence>
//             {isClicked &&
//               <motion.div
//                 initial={{ height: 0, marginBottom: 0 }}
//                 animate={{ height: "fit-content", marginBottom: 24 }}
//                 exit={{ height: 0, marginBottom: 0 }}
//                 className="overflow-hidden"
//               >
//                 <div className="grid w-full grid-cols-12 shadow-xl lg:w-[750px]">
//                   <div className="col-span-12 flex flex-col justify-between bg-indigo-600 p-6 lg:col-span-4">
//                     <div className="mb-6">
//                       <h2 className="mb-2 text-xl font-semibold text-white">{data.title}</h2>
//                       <p className="text-sm text-indigo-100">{data.subtitle}</p>
//                     </div>
//                   </div>
//                   <div className="col-span-12 grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-8 lg:grid-cols-3">
//                     {data.routes.map(route => (
//                       <section className='space-y-3 flex flex-col'>
//                         <h3 className="font-semibold">{route.title}</h3>
//                         {route.links.map(link => (
//                           <button onClick={() => setIsOpen(false)} className='text-left'>
//                             <Link
//                               to={link.to}
//                               rel="nofollow"
//                               className="block text-sm hover:underline hover:text-indigo-600"
//                               aria-label={link.text}
//                             >
//                               {link.text}
//                             </Link>
//                           </button>
//                         ))}
//                       </section>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             }
//           </AnimatePresence>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="group relative w-full text-neutral-950"
//           >
//             <Link to="/contact" className="flex w-full items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold">
//               <span>Contact</span>
//               <svg className='duration-300 group-hover:-rotate-45' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                 <line x1="5" y1="12" x2="19" y2="12" />
//                 <polyline points="12 5 19 12 12 19" />
//               </svg>
//             </Link>
//           </button>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// // const AboutCard = () => {
// //   return (
// //     <motion.div
// //       variants={cardVariants}
// //       initial='close'
// //       animate='open'
// //       exit='close'
// //       className="absolute left-1/2 top-12 bg-white text-black"
// //     >
// //       <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
// //       <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
// //       <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
// //         <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-6 lg:col-span-4">
// //           <div>
// //             <h2 className="mb-2 text-xl font-semibold text-white">About us</h2>
// //             <p className="mb-6 max-w-xs text-sm text-neutral-400">Placeholder is the world's leading placeholder company.</p>
// //           </div>
// //         </div>
// //         <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
// //           {aboutSection.routes.map(route => (
// //             <section className='group space-y-3'>
// //               <h3 className="mb-1 font-semibold">{route.title}</h3>
// //               {route.links.map(link => (
// //                 <Link
// //                   to={link.to}
// //                   rel="nofollow"
// //                   className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
// //                   aria-label={link.aria}
// //                 >
// //                   {link.text}
// //                 </Link>
// //               ))}
// //             </section>
// //           ))}
// //           <a href="#" className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100">
// //             <h3 className="mb-1 font-semibold">Features</h3>
// //             <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?</p>
// //           </a>
// //           <a href="#" className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100">
// //             <h3 className="mb-1 font-semibold">Testimonials</h3>
// //             <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?</p>
// //           </a>
// //           <a href="#" className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100">
// //             <h3 className="mb-1 font-semibold">Press</h3>
// //             <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?</p>
// //           </a>
// //           <a href="#" className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100">
// //             <h3 className="mb-1 font-semibold">Blog</h3>
// //             <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?</p>
// //           </a>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// const RealisationCard = () => (
//   <motion.div
//     variants={cardVariants}
//     initial='close'
//     animate='open'
//     exit='close'
//     className="absolute left-1/2 top-12 -translate-x-1/2 bg-white text-black"
//   >
//     <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
//     <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
//     <div className="grid w-full grid-cols-12 shadow-xl lg:w-[750px]">
//       <div className="col-span-12 flex flex-col justify-between bg-indigo-700 p-6 lg:col-span-4">
//         <div className="mb-6">
//           <h2 className="mb-2 text-xl font-semibold text-white">{data.title}</h2>
//           <p className="text-sm text-slate-100">{data.subtitle}</p>
//         </div>
//       </div>
//       <div className="col-span-12 grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-8 lg:grid-cols-3">
//         {data.routes.map(route => (
//           <section className='space-y-3'>
//             <h3 className="font-semibold">{route.title}</h3>
//             {route.links.map(link => (
//               <Link
//                 to={link.to}
//                 rel="nofollow"
//                 className="block text-sm hover:underline hover:text-indigo-600"
//                 aria-label={link.text}
//               >
//                 {link.text}
//               </Link>
//             ))}
//           </section>
//         ))}
//       </div>
//     </div>
//   </motion.div>
// );

// type NavBarElementProps = {
//   navTitle: string,
//   navLink: string,
//   JsxCard: JSX.Element | null
// }

// const NavBarElement = ({ navTitle, navLink, JsxCard = null }: NavBarElementProps) => {
//   const [onHover, setOnHover] = useState(false);

//   const handleHover = () => {
//     setOnHover(true);
//   };

//   const handleLeave = () => {
//     setOnHover(false);
//   };

//   return (
//     <motion.div
//       onMouseEnter={handleHover}
//       onMouseLeave={handleLeave}
//       className="relative h-fit w-fit"
//     >
//       <Link to={navLink} className="relative">
//         {navTitle}
//         <motion.span
//           variants={underlineVariants}
//           animate={onHover ? 'open' : 'close'}
//           className="absolute -bottom-2 -left-2 -right-2 h-px origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
//         />
//       </Link>
//       {JsxCard !== null &&
//         <AnimatePresence>
//           {onHover && JsxCard}
//         </AnimatePresence>
//       }
//     </motion.div>
//   );
// };

// const NavBar = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleScroll = () => {
//     const position = window.pageYOffset;
//     setScrollPosition(position);
//   };

//   const handleMobileNav = () => {
//     setIsOpen(prev => !prev);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <motion.nav
//       className={`fixed top-0 z-50 w-full px-6 text-white transition-all duration-300 ease-out lg:px-12
//         ${scrollPosition > 100 ? 'bg-neutral-950 py-3 shadow-xl' : 'bg-neutral-950/0 py-6 shadow-non'}
//       `}
//     >
//       <div className="mx-auto flex max-w-7xl items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Link
//             to=''
//             className="text-2xl font-bold text-white"
//           >
//             Imaginary
//           </Link>
//           <svg width="50" height="39" viewBox="0 0 50 39" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-10">
//             <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" stop-color="white" />
//             <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" stop-color="white" />
//           </svg>
//         </div>
//         <div className="hidden gap-6 lg:flex">
//           <div className="flex items-center gap-6">
//             <NavBarElement navTitle='Home' navLink='/' />
//             <NavBarElement navTitle='Nos Réalisations' navLink='/realisations' JsxCard={RealisationCard} />
//             <NavBarElement navTitle='Contact' navLink='/contact' />
//             <Link
//               to=''
//               className="flex gap-2 border-[1px] p-2 rounded-lg border-white w-fit transition-transform duration-300 active:scale-90 font-medium hover:scale-110"
//             >
//               {/* <LuPhoneCall className='scale-125 my-auto' /> */}
//               I am a link
//             </Link>
//           </div>
//         </div>
//         <div className="block lg:hidden">
//           <button
//             onClick={handleMobileNav}
//             className="block text-3xl hover:bg-white/70 hover:text-black rounded-full p-4"
//           >
//             <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//               <line x1="3" y1="12" x2="21" y2="12" />
//               <line x1="3" y1="6" x2="21" y2="6" />
//               <line x1="3" y1="18" x2="14" y2="18" />
//             </svg>
//           </button>
//           <AnimatePresence mode='wait'>
//             {isOpen && <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />}
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default NavBar;

const NavBar = () => {
  return (
    <div className='fixed p-5 z-50 w-full bg-slate-700 top-0 shadow-lg'>
      hello
    </div>
  )
}

export default NavBar
