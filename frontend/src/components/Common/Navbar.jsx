import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import SearchBar from './SearchBar'

const Navbar = () => {
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
                    <button className='relative text-soft-blue hover:text-dark-blue transition-all duration-200'>
                        <HiOutlineShoppingBag className='h-6 w-6 ' />
                        <span className='absolute -top-1 bg-dark-blue text-light-blue text-xs rounded-full px-2 py-0.5'>4</span>
                    </button>
                    {/* search */}
                    <SearchBar />
                    <button to="/profile" className='md:hidden text-soft-blue hover:text-dark-blue transition-all duration-200'>
                        <HiBars3BottomRight className='h-6 w-6 ' />
                    </button>

                </div>
            </nav>
        </>
    )
}

export default Navbar