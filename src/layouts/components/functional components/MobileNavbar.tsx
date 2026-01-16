import type { NavStructure } from '@/lib/util/type';
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import NavLink from '../NavLink';

interface MobileNavbarProps {
  className?: string,
  navHeaders: NavStructure
}

export default function MobileNavbar({className, navHeaders}:MobileNavbarProps) {
  const [toggleVisible, setToggleVisible] = useState(false);
  return (
    <div className={className}>
      <GiHamburgerMenu
        onClick={() => setToggleVisible(!toggleVisible)}
        className="text-white cursor-pointer "
        size={28}
      />
      {/* Sliding Mobile Nav */}
      <div 
        onClick={() => setToggleVisible(false)}
        className={`bg-black/50 absolute right-0 top-0 h-screen w-full transition-all duration-300 ease-in-out 
        ${toggleVisible ? 'block' : 'hidden'}`}/>
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`w-1/2 flex flex-row absolute right-0 top-0 h-screen bg-red-500 transition duration-350 z-10 ease-in-out origin-right 
        ${toggleVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className='w-1/20 h-full bg-primary-dark'/>
       {/*  Nav Links */}
        <ul className='flex flex-col gap-5 items-center w-full p-4'>
          {navHeaders.nav.map((item, index) => (
            <li key={index}>
              <NavLink 
                className='font-light text-lg text-white'
                title={item.name} 
                href={item.url}
                underlineClassName={`h-0.5 bg-white`}
                hasUnderline={false}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
