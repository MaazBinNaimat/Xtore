import React from 'react'
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {

  const cartProducts = [
    {
      proId: 1,
      name: "Classic Shirt",
      size: 'M',
      price: 39.99,
      quantity: 2,
      color: "Red",
      image: "https://picsum.photos/500/500?random=1",
    },
    {
      proId: 2,
      name: "Sports Jacket",
      size: 'L',
      price: 79.99,
      quantity: 1,
      color: "Blue",
      image: "https://picsum.photos/500/500?random=2",
    },
    {
      proId: 3,
      name: "Running Shoes",
      size: '9',
      price: 89.99,
      quantity: 3,
      color: "Black",
      image: "https://picsum.photos/500/500?random=42",
    },
    {
      proId: 4,
      name: "Leather Wallet",
      size: 'One Size',
      price: 49.99,
      quantity: 1,
      color: "Brown",
      image: "https://picsum.photos/500/500?random=43",
    },
    {
      proId: 5,
      name: "Smart Watch",
      size: 'One Size',
      price: 199.99,
      quantity: 1,
      color: "Silver",
      image: "https://picsum.photos/500/500?random=44",
    },
  ]

  return (
    <>
      {cartProducts.map((pro, ind) => (
        <div
          key={ind}
          className='flex items-start justify-between py-4 border-b'>
          <div
            className='flex items-start'>
            <img
              src={pro.image}
              alt={pro.name}
              className='w-20 h-24 object-cover mr-4 rounded' />
            <div>
              <h3>{pro.name}</h3>
              <p
                className='text-sm text-dark-blue'>
                size: {pro.size} | color; {pro.color}
              </p>
              <div className='flex items-center mt-2'>
                <button
                  className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                <span className='mx-4'>{pro.quantity}</span>
                <button
                  className='border rounded px-2 py-1 text-xl font-medium'>+</button>
              </div>
            </div>
          </div>
          <div><p>
            ${pro.price.toLocaleString()}
          </p>
          <button>
            <RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600' />
          </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartContents