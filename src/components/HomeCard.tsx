import { contacts } from '../constants/contacts'
import { routes } from '../constants/routes'
import Link from 'react-router-dom'
import React from 'react'

const HomeCard = () => {
  return (
    <div
      style={{
        transform: "translateZ(80px)",
        transformStyle: "preserve-3d",
      }}
      className='justify-self-center self-center text-center py-6 px-10 select-none z-40'
    >
      {/* <Link
        to={contacts.tel.to}
        className='relative z-10 sm:text-xl text-sm text-white hover:text-green-500 dark:hover:text-yellow-500'
      >
        {contacts.tel.value}
      </Link> */}
      <h1 className='lg:text-8xl text-4xl text-black font-bold transform scale-y-125'>Fermetures</h1>
      <h2 className='text-yellow-500 lg:text-6xl sm:text-4xl text-2xl font-bold'>
        Sans Souci
      </h2>
      <p className='lg:text-3xl sm:text-xl text-md text-white transform -skew-x-12'>depuis 1998</p>
      <div className='bg-yellow-600 w-24 mt-2 m-auto h-0.5' />
      <div className='text-white mx-auto rounded-lg mt-5 w-52 sm:w-96 sm:leading-relaxed leading-tight'>
        {/* {routes?.champs.map((option, i) => (
          <div key={i} className='inline-block'>
            <Link
              to={option.to}
              className='dark:hover:text-yellow-500 hover:text-green-500 sm:text-base text-sm'
            >
              {option.value}
            </Link>
            {i < options.length - 1 && ' -'}&nbsp;
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default HomeCard