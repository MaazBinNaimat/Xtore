import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'

const Home = () => {
  return (
    <>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* best product section */}
      <ProductDetails />
    </>
  )
}

export default Home