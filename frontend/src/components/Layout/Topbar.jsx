import React from 'react'
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"
import { LuLinkedin } from "react-icons/lu";


const Topbar = () => {
  return (
    <>
      <div className='bg-dark-blue text-light-blue'>
        <div className="container mx-auto flex justify-between items-center py-3 px-x">
          <div className='hidden md:flex items-center space-x-4'>
            <a href="/" className='transition-all duration-300 hover:text-soft-blue'>
              <TbBrandMeta className='h-6 w-5' />
            </a>
            <a href="/" className='transition-all duration-300 hover:text-soft-blue'>
              <IoLogoInstagram className='h-5 w-5' />
            </a>
            <a href="/" className='transition-all duration-300 hover:text-soft-blue'>
              <RiTwitterXLine className='h-5 w-5' />
            </a>
            <a href="/" className='transition-all duration-300 hover:text-soft-blue'>
              <LuLinkedin className='h-5 w-5' />
            </a>
          </div>
          <div className="text-sm text-center flex-grow">
            <span>We ship all over Pakistan - Fast and relaible shipping</span>
          </div>
          <div className="text-sm hidden md:block">
            <a href="tel:+92 317 8029 482" className='transition-all duration-300 hover:text-soft-blue'>+92 317 8029 482</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar