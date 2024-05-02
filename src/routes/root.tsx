import { Outlet } from "react-router-dom";
import { motion } from 'framer-motion';
import { LinkProps } from "../models/route";

const links: LinkProps[] = [
  {
    to: '#',
    text: 'Subscriptions'
  }
];

const NavBar = () => {
  return (
    <div className='fixed h-[54px] z-50 w-full bg-slate-700 shadow-lg text-white'>
      {links.map((link, i) => (
        <motion.a
          key={i}
          href={link.to}
        >
          {link.text}
        </motion.a>
      ))}
    </div>
  );
};

const Root = () => {
  return (
    <main className="h-full">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Root;
