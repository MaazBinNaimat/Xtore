import React from 'react'
import banner from '../../assets/banner2.avif'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section className='relative'>
                <img src={banner} alt="Xtore" className='w-full h-[400px] md:h-[500px] lg:h-[620px] object-cover' />

                <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
                    <div className='text-center text-white p-6'>
                        <h1 className='text-4xl md:text-7xl font-allerta font-bold tracking-tighter uppercase mb-4'>
                            Signature Scents
                        </h1>
                        <h2 className='text-xl md:text-2xl font-light tracking-wide italic mb-6'>
                            Not Just a Fragrance — A Statement.
                        </h2>
                        <Link to="#"
                            className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg hover:bg-medium-blue transition-all duration-200 hover:text-white'>
                            Discover Scents
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero