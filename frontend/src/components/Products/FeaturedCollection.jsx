import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedCollection = () => {
    return (
        <>
            <section className='py-16 px-4 lg:px-0'>
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
                    {/* Left content */}
                    <div className="lg:w-1/2 p-8 text-center lg:text-left">
                        <h2 className='text-lg font-semibold text-gray-700 mb-2'>
                            Comfert Zone Scents
                        </h2>
                        <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
                            Where Comfort Meets Fragrance
                        </h2>
                        <p className='text-lg text-gray-600 mb-6'>
                            Discover our signature scents designed to elevate every step you take. Perfect balance of comfort, elegance, and fragrance.
                        </p>
                        <Link to="/collections/all" className='bg-dark-blue text-white px-6 py-3 rounded-lg text-lg hover:bg-light-blue hover:text-dark-blue transition-all duration-300'>
                            Shop Now
                        </Link>
                    </div>
                    {/* Right Content */}
                    <div className="lg:w-1/2">
                        <img src="https://scentsnstories.pk/cdn/shop/files/Outlet_Image.webp?v=1738075366&width=832" alt="Collection Img" className='w-full h-full object-cover lg:rounded-br-3xl lg:rounded-tr-3xl  ' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedCollection