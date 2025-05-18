import React from 'react'
import manCollectionImage from '../../assets/GenderCollectionImages/man.png'
import womanCollectionImage from '../../assets/GenderCollectionImages/woman.png'
import { Link } from 'react-router-dom'

const GenderCollectionSection = () => {
    return (
        <>
            <section className='py-16 px-4 lg:px-0'>
                <div className="container mx-auto flex flex-col md:flex-row gap-8">
                    {/* men collection */}
                    <div className='relative flex-1 hover:flex-1/12 transition-all duration-500'>
                        <img src={manCollectionImage} alt="men's collection"
                            className='w-full h-[700px] object-cover'
                        />
                        <div className="absolute bottom-8 left-8 bg-white/90 p-4">
                            <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                                Men's Collection
                            </h2>
                            <Link to="/collection/all?gender=men"
                                className='text-gray-900 underline'>
                                Shop Now
                            </Link>
                        </div>
                    </div>
                    {/* women collection */}
                    <div className='relative flex-1 hover:flex-1/12 transition-all duration-500'>
                        <img src={womanCollectionImage} alt="Women's collection"
                            className='w-full h-[700px] object-cover'
                        />
                        <div className="absolute bottom-8 left-8 bg-white/90 p-4">
                            <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                                Women's Collection
                            </h2>
                            <Link to="/collection/all?gender=women"
                                className='text-gray-900 underline'>
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GenderCollectionSection