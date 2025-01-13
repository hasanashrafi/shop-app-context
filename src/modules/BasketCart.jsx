import React from 'react'
import { useCart } from '../context/CartContext'
import { shortestTitle } from '../utils/helper'
import { Link } from 'react-router-dom'

function BasketCart({ basketRef }) {
    const [state] = useCart()
    const { selectedProducts, productsCounter, total } = state

    if (!selectedProducts.length) {
        return (
            <div className='absolute z-50 md:right-8 right-20 top-10 w-72 rounded-md h-64 bg-teal-500/90 p-2' ref={basketRef}>
                <p className='text-center p-4'>Your cart is empty.</p>
            </div>
        )
    }

    return (
        <div className='absolute z-50   top-12 w-[84%] md:w-1/3 right-16 md:right-8 rounded-md h-64 bg-teal-800 p-2' ref={basketRef}>
            {selectedProducts.map((product, index) => (
                <div key={index} className='flex items-center text-white justify-between p-2 border-b border-gray-200'>
                    <img src={product.image} className='rounded-full size-6'/>
                    <p>{shortestTitle(product.title)}</p>
                    <p>{product.price}</p>
                    <p className='rounded-full bg-orange-700 px-1'>x{product.quantity}</p>
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
    )
}

export default BasketCart