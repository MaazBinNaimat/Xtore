import React, { useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const HandleSearchToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='`flex items-center justify-center w-full transition-all duration-300 ${ isOpen ? "absolute top-0 left-0 w-full bg-light-blue h-24 z-50" : "w-auto" }`'>
            {isOpen ? (
                <form className='relative flex items-center justify-center w-full bg-soft-blue'>
                    <div className='relative w-1/2'>
                        <input type="text" placeholder='Search' value={searchTerm} className='bg-light-blue px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none'/>
                    </div>
                </form>
            ) : (
                <button onClick={HandleSearchToggle} className='text-medium-blue hover:text-dark-blue transition-full duration-200 '>
                    <HiMagnifyingGlass className='h-6 w-6' />
                </button>
            )}
        </div>
    )
}

export default SearchBar