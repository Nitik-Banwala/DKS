"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from './Button'
import Icons from './Icons'
import { navLinks } from '@/utils/helper';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className='bg-[#FAFAFA] w-full z-50 pop px-4 fixed'>
      <div className='max-w-285 justify-between mx-auto flex flex-row py-3.75 px-4 lg:px-0 items-center'>

        <div className='my-1.25 z-50'>
          <Image
            src={"/assets/image/logo.png"}
            alt='logo'
            width={193}
            height={41}
          />
        </div>
        <div className='hidden lg:flex flex-row border items-center gap-8 leading-[160%] text-base font-normal border-[#0101011F] py-2 px-5 rounded-[46px]'>
          {navLinks.map(({ label, hasIcon }) => (
            <a
              key={label}
              href="#"
              onClick={(e) => { e.preventDefault(); setActiveLink(label) }}
              className={`flex flex-row gap-1.5 items-center transition-colors duration-200 ${
                activeLink === label
                  ? 'text-[#19AE1A] '
                  : 'text-black hover:text-[#19AE1A]'
              }`}
            >
              {label}
              {hasIcon && <Icons icon={"down"} />}
            </a>
          ))}
        </div>

        <div className='hidden lg:block'>
          <Button
            text={'Get Free Quote'}
            className={'bg-[#19AE1A] w-[177.1px] h-[50.1px] font-semibold text-[#FAFAFA] rounded-[245px] hover:bg-[#FAFAFA] hover:border hover:border-[#19AE1A] hover:text-[#19AE1A] active:bg-[#19AE1A] active:text-white'}
          />
        </div>
        <button
          className='lg:hidden z-60 flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#19AE1A] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#19AE1A] rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#19AE1A] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-[#FAFAFA] shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col items-start gap-5 px-8 pt-8'>
          {navLinks.map(({ label, hasIcon }) => (
            <a
              key={label}
              href="#"
              onClick={(e) => { e.preventDefault(); setActiveLink(label); setMenuOpen(false) }}
              className={`flex flex-row gap-1.5 items-center text-base leading-[160%] font-normal transition-colors duration-200 ${
                activeLink === label
                  ? 'text-[#19AE1A] font-semibold'
                  : 'text-black hover:text-[#19AE1A]'
              }`}
            >
              {label}
              {hasIcon && <Icons icon={"down"} />}
            </a>
          ))}

          <div className='mt-4'>
            <Button
              text={'Get Free Quote'}
              className={'bg-[#19AE1A] w-[177.1px] h-[50.1px] font-semibold text-[#FAFAFA] rounded-[245px] hover:bg-[#FAFAFA] hover:border hover:border-[#19AE1A] hover:text-[#19AE1A] active:bg-[#19AE1A] active:text-white'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar