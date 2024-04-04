import { Link, useLocation } from 'react-router-dom';
import { LuMail, LuPhoneCall } from "react-icons/lu";

const NavBar = () => {
  return (
    <nav className="fixed z-50 left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 hover:border-neutral-500 bg-neutral-900 p-2 text-sm text-neutral-500">
      {/* <Link to="/">
        <svg width="24" length="auto" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 fill-neutral-50">
          <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" stopColor="#000000"></path>
          <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" stopColor="#000000"></path>
        </svg>
      </Link> */}
      <Link to="/" rel="nofollow" className="block overflow-hidden">
        <div className="h-[20px]" style={{ transform: "none" }}>
          <span className="flex h-[20px] items-center">Accueil</span>
          <span className="flex h-[20px] items-center text-neutral-50">Accueil</span>
        </div>
      </Link>
      <Link to="/galerie-photo" rel="nofollow" className="block overflow-hidden">
        <div className="h-[20px]" style={{ transform: "none" }}>
          <span className="flex h-[20px] items-center">Photos</span>
          <span className="flex h-[20px] items-center text-neutral-50">Photos</span>
        </div>
      </Link>
      <Link to="/galerie-photo" rel="nofollow" className="block overflow-hidden">
        <div className="h-[20px]" style={{ transform: "none" }}>
          <span className="flex h-[20px] items-center">Contact</span>
          <span className="flex h-[20px] items-center text-neutral-50">Contact</span>
        </div>
      </Link>
      <section className='flex gap-3'>
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
      </section>
    </nav>
  );
};

export default NavBar;
