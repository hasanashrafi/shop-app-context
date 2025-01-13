import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductsDetail } from '../context/ProductContext'
import Loader from '../components/Loader'

function DetailsPage() {
  const { id } = useParams()

  const product = useProductsDetail(+id)

  if (!product) return <Loader />
  
  return (
    <div className='min-h-screen  mx-auto text-black p-4'>
      <img src={product.image} className='mx-auto rounded-md shadow-lg m-5 size-40' />
      <div className='my-10 w-1/2 mx-auto border border-teal-600 rounded-md p-4'>
        <h1 className='text-xl font-bold p-2'>{product.title}</h1>
        <p className='text-justify p-2'>{product.description}</p>
        <p className='text-lg font-medium p-2'>{product.price}</p>
        <p className=' p-1.5 bg-teal-600 w-fit rounded-lg text-white'>{product.category}</p>

      </div>
    </div>
  )
}

export default DetailsPage