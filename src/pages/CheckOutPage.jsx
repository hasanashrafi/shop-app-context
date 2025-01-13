import React from 'react'
import BasketCard from '../components/BasketCard'
import { useCart } from '../context/CartContext'

function CheckOutPage() {
  const [state, dispatch] = useCart()

  if (!state.selectedProducts.length) {
    return (
      <p className='min-h-screen text-teal-700 text-center p-4'>Your cart is empty.</p>
    )
  }
  return (
    <div className='min-h-screen '>
      {
        state.selectedProducts.map(product => (
          <BasketCard product={product} state={state} dispatch={dispatch} />
        ))
      }
    </div>
  )
}

export default CheckOutPage