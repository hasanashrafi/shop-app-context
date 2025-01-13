import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductsDetail } from '../context/ProductContext'
import Loader from '../components/Loader'
import { BiArrowBack } from 'react-icons/bi'

function DetailsPage() {
  const { id } = useParams()

  const product = useProductsDetail(+id)

  if (!product) return <Loader />
  
  return (
    <div className='min-h-screen  mx-auto text-black p-4'>
     <Link to="/" className='m-2 border block w-fit rounded-full border-teal-600 p-1 hover:bg-teal-600  ease-in-out transition-all'>
      <BiArrowBack className='text-xl text-teal-600 hover:text-white '/>
     </Link>
      <img src={product.image} className='mx-auto rounded-lg shadow-lg m-5 w-full h-64 sm:size-72' />
      <div className='my-10 md:w-1/2 mx-auto border border-teal-600 rounded-md p-4'>
        <h1 className='text-xl font-bold p-2'>{product.title}</h1>
        <p className='text-justify p-2'>{product.description}</p>
        <p className='text-lg font-medium p-2'>{product.price}</p>
        <p className=' p-1.5 bg-teal-600 w-fit rounded-lg text-white'>{product.category}</p>

      </div>
    </div>
  )
}

export default DetailsPage