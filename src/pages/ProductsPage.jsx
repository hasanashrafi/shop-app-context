import React from 'react'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'

function ProductsPage() {
  const  products  = useProducts()
  console.log(products)
  return (
   <div className='w-full p-2 flex justify-center mx-auto '>
     <div className='mx-auto flex flex-wrap  items-center  gap-3 justify-center'>
      {
       products && products.map((product) =>
          <ProductCard key={product.id} product={product} />
        )
      }
    </div>
   </div>
  )
}

export default ProductsPage