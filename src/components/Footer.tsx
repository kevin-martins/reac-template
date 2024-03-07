import { getIntervalYear } from "../helpers/helpers"

import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { contacts } from "../constants/contacts"

const VerticalLine = () => <div className="w-0.5 bg-slate-500 dark:bg-white/30" />

const HorizontalLine = () => <div className="h-[1px] bg-slate-500 dark:bg-white/30 mt-20" />

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  return (
    <footer className="pt-28 pb-20 mx-auto">
      <div className='flex lg:flex-row flex-col gap-12 max-w-6xl mx-auto'>
        <div className="w-full m-auto text-center">
          {/* <Image
            src={'/logo.png'}
            alt={'alt'}
            width={50}
            height={50}
          /> */}
          <Link to={contacts.location.to} className='sm:text-lg'>
            {contacts.location.value}
          </Link>
        </div>
        <VerticalLine />
        <div className="w-full mx-auto flex flex-col">
          <h1 className="text-2xl">Contact</h1>
          <Link to={contacts.tel.to} className="text-lg my-auto pl-5 pt-2">
            {contacts.tel.value}
          </Link>
          <Link to={contacts.mail.to} className='pl-5 sm:text-lg'>
            {contacts.mail.value}
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <HorizontalLine />
        <p className="text-center mt-4 text-lg">Copyright &copy; {currentYear} - Fermeture Sans Souci</p>
      </div>
    </footer>
  )
}

export default Footer
