import React from 'react'
import BasketCard from '../components/BasketCard'
import { useCart } from '../context/CartContext'

function CheckOutPage() {
  const [state, dispatch] = useCart()

  const clickHandler = (type) => {
    dispatch({ type})
}

  if (!state.selectedProducts.length) {
    return (
      <div className='min-h-screen'>
      <p className='w-[90%] mx-auto text-red-700 bg-red-300 text-center p-2 my-4 rounded-xl'>Your cart is empty.</p>
      </div>
    )
  }
  return (
    <div className='min-h-screen '>
      {
        state.selectedProducts.map((product) => (
          <BasketCard key={product.id} product={product} state={state} dispatch={dispatch} />
        ))
      }
      <div className='md:w-1/3 mx-auto font-semibold text-black flex justify-between p-2 border-t border-gray-200'>
                    <p>Total:</p>
                    <p>${state.total}</p>
                </div>

                <button className='md:w-1/3 w-[90%] mx-auto block mt-1 border-teal-600 border  text-center p-1.5 hover:bg-teal-500 ease-in-out transition-all hover:text-white bg-white rounded-lg text-teal-700 '
                    onClick={() => clickHandler("CHECKOUT")}>
                    CheckOut
                </button>
    </div>
  )
}

export default CheckOutPage