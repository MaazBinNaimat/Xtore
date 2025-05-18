import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
    const [DrwerOpen, setDrwerOpen] = useState(false)
    const [NavDrawerOpen, setNavDrawerOpen] = useState(false)

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!NavDrawerOpen)
    }

    const toggleCartDrawer = () => {
        setDrwerOpen(!DrwerOpen);
    }
    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                {/* logo */}
                <Link to="/" className='text-3xl font-medium font-allerta text-dark-blue' >
                    Xtore
                </Link>
                {/* naigations */}
                <div className="hidden md:flex space-x-6">
                    <Link to="#" className='text-soft-blue text-sm font-medium uppercase hover:text-dark-blue transition-all duration-300'>Home</Link>
                    <Link to="#" className='text-soft-blue text-sm font-medium uppercase hover:text-dark-blue transition-all duration-300'>Home</Link>
                    <Link to="#" className='text-soft-blue text-sm font-medium uppercase hover:text-dark-blue transition-all duration-300'>Home</Link>
                    <Link to="#" className='text-soft-blue text-sm font-medium uppercase hover:text-dark-blue transition-all duration-300'>Home</Link>
                    <Link to="#" className='text-soft-blue text-sm font-medium uppercase hover:text-dark-blue transition-all duration-300'>Home</Link>
                    <Link to="#" className='text-soft-blue text-sm font-medium uppercase hover:text-dark-blue transition-all duration-300'>Home</Link>
                </div>
                {/* icons */}
                <div className='flex items-center space-x-4'>
                    <Link to="/profile" className='text-soft-blue hover:text-dark-blue transition-all duration-200'>
                        <HiOutlineUser className='h-6 w-6 ' />
                    </Link>
                    <button onClick={toggleCartDrawer} className='relative text-soft-blue hover:text-dark-blue transition-all duration-200'>
                        <HiOutlineShoppingBag className='h-6 w-6 ' />
                        <span className='absolute -top-1 bg-dark-blue text-light-blue text-xs rounded-full px-2 py-0.5'>4</span>
                    </button>
                    {/* search */}
                    <div className="overflow-hidden">
                        <SearchBar />
                    </div>

                    <button onClick={toggleNavDrawer} className='md:hidden text-soft-blue hover:text-dark-blue transition-all duration-200'>
                        <HiBars3BottomRight className='h-6 w-6 ' />
                    </button>

                </div>
            </nav>
            <CartDrawer DrwerOpen={DrwerOpen} toggleCartDrawer={toggleCartDrawer} />

            {/* mobile navigation */}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${NavDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className='flex justify-end p-4'>
                    <button onClick={toggleNavDrawer}>
                        <IoMdClose className='h-6 w-6 text-dark-blue' />
                    </button>
                </div>
                <div className="p-4">
                    <h2 className='text-xl font-semibold mb-4 font-allerta'>Menu</h2>
                    <nav className='space-y-4'>
                        <Link to="#" onClick={toggleCartDrawer} className='block text-medium-blue hover:text-dark-blue transition-all duration-100'>
                            Home
                        </Link>
                        <Link to="#" onClick={toggleCartDrawer} className='block text-medium-blue hover:text-dark-blue transition-all duration-100'>
                            Home
                        </Link>
                        <Link to="#" onClick={toggleCartDrawer} className='block text-medium-blue hover:text-dark-blue transition-all duration-100'>
                            Home
                        </Link>
                        <Link to="#" onClick={toggleCartDrawer} className='block text-medium-blue hover:text-dark-blue transition-all duration-100'>
                            Home
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar