import React from 'react'
import { useCart } from '../context/CartContext'
import BasketCart from '../modules/BasketCart'
import { shortestTitle } from '../utils/helper'
import { Link } from 'react-router-dom'

function CheckOutPage() {
  const [state] = useCart()
  const { selectedProducts, productsCounter, total } = state

  if (!selectedProducts.length) {
    return (
      <p className='min-h-screen text-teal-700 text-center p-4'>Your cart is empty.</p>
    )
  }
  return (
    <div className='min-h-screen'>
     <div className='w-full md:w-1/2 mx-auto p-4 text-teal-800'>
     {selectedProducts.map((product, index) => (
        <div key={index} className='flex items-center  justify-between p-2 border-b border-gray-200'>
          <img src={product.image} className='rounded-full size-6' />
          <p>{shortestTitle(product.title)}</p>
          <p>{product.price}</p>
          <p className='rounded-full text-white bg-orange-700 px-1'>x{product.quantity}</p>
        </div>
      ))}
      <div className='flex justify-between p-2 border-t border-gray-200'>
        <p>Total:</p>
        <p>${total}</p>
      </div>
      <Link className='absolute bottom-1 right-0 left-0 m-2 text-center p-1.5 hover:bg-teal-500 ease-in-out transition-all hover:text-white bg-white rounded-lg text-teal-700 '
        to="/checkout">
        CheckOut
      </Link>
     </div>
    </div>
  )
}

export default CheckOutPage