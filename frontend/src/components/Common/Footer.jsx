import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'
import { FiPhoneCall } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='border-t py-12'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
          <div>
            <h3 className='text-lg text-dark-blue mb-4 font-allerta'>Newslatter</h3>
            <p className='text-gray-500 mb-4'>
              Be the first to hear about new products, exclusive events, and online offers.
            </p>
            <p className='font-medium text-sm text-medium-blue mb-6'>Sign up and get 10% off on your first order.</p>
            {/* newslatter form */}
            <form className='flex'>
              <input type="email" placeholder='Enter your email' className='p-3 w-full text-sm border-t border-l border-b border-dark-blue rounded-l-md focus:outline-none focus:ring-2 focus:ring-medium-blue transition-all' required />
              <button
                type='submit'
                className='bg-dark-blue text-white px-6 py-3 text-sm rounded-r-md hover:bg-medium-blue transition-all duration-100'>
                Subscribe
              </button>
            </form>
          </div>
          {/* shop links */}
          <div>
            <h3 className='text-lg text-dark-blue mb-4 font-allerta'>Shop</h3>
            <ul className='space-y-2 text-medium-blue'>
              <li>
                <Link to='#' className='hover:text-medium-blue transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-medium-blue transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-medium-blue transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-medium-blue transition-colors'>
                  Home
                </Link>
              </li>

            </ul>
          </div>
          {/* SUpport Links */}
          <div>
            <h3 className='text-lg text-dark-blue mb-4 font-allerta'>Support</h3>
            <ul className='space-y-2 text-medium-blue'>
              <li>
                <Link to='#' className='hover:text-medium-blue transition-colors'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-medium-blue transition-colors'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-medium-blue transition-colors'>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-medium-blue transition-colors'>
                  Features
                </Link>
              </li>

            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <h3 className='text-lg text-dark-blue mb-4 font-allerta'>
              Follow Us
            </h3>
            <div className='flex items-center space-x-4 mb-6'>
              <a
                href="https://www.facebook.com"
                target='_blank'
                rel='noopener noreferrer'
                className='text-medium-blue hover:text-soft-blue'>
                <TbBrandMeta className='w-5 h-5' />
              </a>
              <a
                href="https://www.facebook.com"
                target='_blank'
                rel='noopener noreferrer'
                className='text-medium-blue hover:text-soft-blue'>
                <IoLogoInstagram className='w-5 h-5' />
              </a>
              <a
                href="https://www.facebook.com"
                target='_blank'
                rel='noopener noreferrer'
                className='text-medium-blue hover:text-soft-blue'>
                <RiTwitterXLine className='w-5 h-5' />
              </a>
            </div>
            <p className='text-medium-blue'>Call Us</p>
            <p>
              <FiPhoneCall className='inline-block mr-2' />
              0123-456-789
            </p>
          </div>
        </div>
        {/* footer bottom */}
        <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
          <p className='text-gray-500 text-sm tracking-tighter text-center'>© 2025, CompileTab. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer