import React from 'react'
import ProductsPage from '../pages/ProductsPage'
import Slider from './Slider'

function Home() {
  return (
    <div className='min-h-screen mx-auto max-w-7xl flex flex-col justify-center'>
    <Slider/>
    <ProductsPage/>
    </div>
  )
}

export default Home