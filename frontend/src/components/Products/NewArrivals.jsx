import React, { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    // Products array here (same as your original)
    {
      "_id": "1",
      "name": "Classic Denim Jacket",
      "price": 4499,
      "images": [{ "url": "https://picsum.photos/seed/jacket/400/400", "alttext": "Blue classic denim jacket" }]
    },
    {
      "_id": "2",
      "name": "White Cotton Shirt",
      "price": 2299,
      "images": [{ "url": "https://picsum.photos/seed/shirt/400/400", "alttext": "Men's white cotton shirt" }]
    },
    {
      "_id": "3",
      "name": "Floral Summer Dress",
      "price": 3199,
      "images": [{ "url": "https://picsum.photos/seed/dress/400/400", "alttext": "Women's floral print summer dress" }]
    },
    {
      "_id": "4",
      "name": "Running Sneakers",
      "price": 5799,
      "images": [{ "url": "https://picsum.photos/seed/sneakers/400/400", "alttext": "Pair of white running sneakers" }]
    },
    {
      "_id": "5",
      "name": "Leather Handbag",
      "price": 6899,
      "images": [{ "url": "https://picsum.photos/seed/handbag/400/400", "alttext": "Black leather handbag for women" }]
    },
    {
      "_id": "6",
      "name": "Sports Watch",
      "price": 3999,
      "images": [{ "url": "https://picsum.photos/seed/watch/400/400", "alttext": "Digital sports watch with black strap" }]
    },
    {
      "_id": "7",
      "name": "Striped T-Shirt",
      "price": 1399,
      "images": [{ "url": "https://picsum.photos/seed/tshirt/400/400", "alttext": "Red and white striped cotton t-shirt" }]
    },
    {
      "_id": "8",
      "name": "Slim Fit Jeans",
      "price": 2799,
      "images": [{ "url": "https://picsum.photos/seed/jeans/400/400", "alttext": "Dark blue slim fit jeans" }]
    }
  ];

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();

      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);

  return (
    <section className='py-16 px-4 lg:px-0'>
      <div className='container mx-auto text-center mb-10 relative'>
        <h2 className='text-3xl font-bold mb-4'>Explore New Arrivals</h2>
        <p className='text-lg text-gray-600 mb-8'>Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion</p>

        {/* Scroll Buttons */}
        <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${canScrollLeft ? "bg-white text-medium-blue" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronLeft className='text-2xl' />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${canScrollRight ? "bg-white text-medium-blue" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronRight className='text-2xl' />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {newArrivals.map((pro) => (
          <div
            key={pro._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={pro.images[0]?.url}
              alt={pro.images[0]?.alttext || pro.name}
              className='w-full h-[400px] object-cover rounded-lg'
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${pro._id}`} className='block'>
                <h4 className='font-medium'>{pro.name}</h4>
                <p className='mt-1'>${pro.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
