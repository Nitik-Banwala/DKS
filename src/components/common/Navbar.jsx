"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from './Button'
import Icons from './Icons'
import { navlinks } from '@/utils/helper';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [openDropdown, setOpenDropdown] = useState(null)


  const dropdownItems = {
    Services: ["Web Design", "Development", "SEO"],
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className='bg-whity w-full z-50 Poppins px-4 fixed'>
      <div className='max-w-285 justify-between mx-auto flex flex-row py-3.75 px-4 lg:px-0 items-center'>

        <div className='my-1.25 z-50'>
          <a href="#">
            <Image src={"/assets/image/png/logo.png"} alt='logo' width={193} height={41} />
          </a>
        </div>

        <div className='hidden lg:flex flex-row border items-center gap-8 leading-160 text-base font-normal border-[#0101011F] py-2 px-5 rounded-[46px]'>
          {navlinks.map(({ label, hasIcon }) => (
            <div key={label} className="relative">
              <a
              href='#'
                onClick={() => {
                  setActiveLink(label)
                  if (hasIcon) {
                    setOpenDropdown(openDropdown === label ? null : label)
                  }
                }}
                className={`flex gap-1.5 items-center transition-colors duration-200 ${
                  activeLink === label
                    ? 'text-green'
                    : 'text-black hover:text-green'
                }`}
              >
                {label}
                {hasIcon && <Icons icon="down" />}
              </a>

              {hasIcon && openDropdown === label && (
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-xl py-2 w-44 z-50">
                  {dropdownItems[label]?.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='hidden lg:block'>
          <Button text={'Get Free Quote'} className={'bg-green hover:border hover:border-green hover:bg-white hover:text-green active:text-white active:bg-green w-[177.1px] h-[50.1px] text-white rounded-full'} />
        </div>

        <button
          className='lg:hidden z-60 flex flex-col w-10 h-10 gap-1.5'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-0.5 bg-green ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-green ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-green ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`lg:hidden fixed top-0 right-0 h-full w-full bg-whity transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col gap-5 px-8 pt-8'>
          {navlinks.map(({ label, hasIcon }) => (
            <div key={label}>
              <button
                onClick={() => {
                  setActiveLink(label)
                  if (hasIcon) {
                    setOpenDropdown(openDropdown === label ? null : label)
                  } else {
                    setMenuOpen(false)
                  }
                }}
                className={`flex gap-2 items-center ${
                  activeLink === label ? 'text-green' : ''
                }`}
              >
                {label}
                {hasIcon && <Icons icon="down" />}
              </button>
              {hasIcon && openDropdown === label && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {dropdownItems[label]?.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-sm text-gray-600"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Button text={'Get Free Quote'} className={'bg-green w-[177.1px] h-[50.1px] text-white rounded-full mt-4'} />
        </div>
      </div>
    </div>
  )
}

export default Navbar