import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'

const placeholderProducts = [
  {
    _id: 1,
    name: "Lady Eve",
    price: "550",
    image: [{
      url: "https://scentsnstories.pk/cdn/shop/files/LAdyeve_37_11zon.webp?v=1735758204&width=720",
    }]
  },
  {
    _id: 2,
    name: "Florse",
    price: "750",
    image: [{
      url: "https://scentsnstories.pk/cdn/shop/files/Florse_eba0c3e5-d9e2-4eb2-b86c-066cf54aa97b.webp?v=1747462727&width=720",
    }]
  },
  {
    _id: 3,
    name: "Merry Me",
    price: "690",
    image: [{
      url: "https://scentsnstories.pk/cdn/shop/files/Merry_Me_59620a79-df00-45af-92ff-67e9c98a9982.webp?v=1747462692&width=720",
    }]
  },
  {
    _id: 4,
    name: "Living Floral",
    price: "490",
    image: [{
      url: "https://scentsnstories.pk/cdn/shop/files/livingfloral_38_11zon.webp?v=1735758179&width=720",
    }]
  },
  {
    _id: 5,
    name: "Heavenly Vibes",
    price: "650",
    image: [{
      url: "https://scentsnstories.pk/cdn/shop/files/heavenlyvibes_26_11zon.webp?v=1735758095&width=720",
    }]
  },
  {
    _id: 6,
    name: "Romeo and Juliet",
    price: "390",
    image: [{
      url: "https://scentsnstories.pk/cdn/shop/files/romeoandjuliet_61_11zon.webp?v=1735758099&width=720",
    }]
  },
  {
    _id: 7,
    name: "Love Letters",
    price: "590",
    image: [{
      url: "https://scentsnstories.pk/cdn/shop/files/loveletter_41_11zon.webp?v=1735758202&width=720",
    }]
  },
  {
    _id: 8,
    name: "Night Love",
    price: "550",
    image: [{
      url: "https://scentsnstories.pk/cdn/shop/files/nightlove_50_11zon.webp?v=1735758147&width=720",
    }]
  }
]

const Home = () => {
  return (
    <>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* best product section */}
      <ProductDetails />
      {/* Top Scents For Females section */}
      <div className="container mx-auto">
        <h2
          className='text-3xl text-center font-bold mb-4'
        >
          Top Scents For Females
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
    </>
  )
}

export default Home