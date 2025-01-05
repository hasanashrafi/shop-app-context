import React from 'react';
import { shortestTitle } from '../utils/helper';
import { Link } from 'react-router-dom';
import { TbShoppingBagExclamation, TbShoppingBagPlus } from 'react-icons/tb';
import { BiDollar } from 'react-icons/bi';

function ProductCard({ product }) {
    return (
        <div className=" flex flex-col justify-between w-64 h-[400px] p-3  shadow-lg  rounded text-black">
            <img src={product.images[1]} alt={product.title} className='rounded-md w-full h-1/2  border object-cover ' />
            <h2 className=" font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600 ">{shortestTitle(product.description)}</p>
           <p className='flex items-center '><BiDollar/> {product.price}</p>
          
          <div className=' p-3 text-2xl w-full flex items-center justify-between   '>
                <Link to={`/products/${product.id}`} className=" text-gray-600 hover:text">
                <TbShoppingBagExclamation className='hover:text-teal-700 transition-all ease-in-out' />
                </Link>
            <button className='text-2xl text-gray-600'>
                <TbShoppingBagPlus className='hover:text-teal-700 transition-all ease-in-out' />
            </button>
           </div>
       


        </div>
    )
}

export default ProductCard