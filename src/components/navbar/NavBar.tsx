import { Link, useLocation } from 'react-router-dom';
import { LuMail, LuPhoneCall } from "react-icons/lu";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 shadow-lg w-full nav-height bg-white">
      <Link to='' className='text-black'>
        Components
      </Link>
      {/* <section className='flex gap-3'> */}
        {/* <a href={contacts.mail.to} className="relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
          border-violet-300 px-4 py-3 font-semibold
          uppercase text-violet-300 transition-all
          
          before:absolute before:inset-0
          before:-z-10 before:scale-[2.5]
          before:translate-x-[-150%] before:translate-y-[-150%]
          before:rounded-[100%] before:bg-violet-300
          before:transition-transform before:duration-500
          before:content-[&quot;&quot;]

          hover:scale-105 hover:text-neutral-900
          hover:before:translate-x-[0%]
          hover:before:translate-y-[0%]
          active:scale-95"
        >
          <LuMail className='scale-150' />
          <span>envoyer un e-mail</span>
        </a>
        <a href={contacts.tel.to} className="relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
          border-violet-300 px-4 py-3 font-semibold
          uppercase text-violet-300 transition-all
          
          before:absolute before:inset-0
          before:-z-10 before:translate-x-[150%]
          before:translate-y-[150%] before:scale-[2.5]
          before:rounded-[100%] before:bg-violet-300
          before:transition-transform before:duration-500
          before:content-[&quot;&quot;]

          hover:scale-105 hover:text-neutral-900
          hover:before:translate-x-[0%]
          hover:before:translate-y-[0%]
          active:scale-95"
        >
          <LuPhoneCall className='scale-150' />
          <span>{contacts.tel.value}</span>
        </a> */}
      {/* </section> */}
    </nav>
  );
};

export default NavBar;
