import React from 'react';
import { productQuantity, shortestTitle } from '../utils/helper';
import { Link } from 'react-router-dom';
import { TbShoppingBagExclamation, TbShoppingBagPlus, TbTrash } from 'react-icons/tb';
import { BiDollar, BiMinus, BiPlus } from 'react-icons/bi';
import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';

function ProductCard({ product }) {
    const [state, dispatch] = useCart()
    const quantity = productQuantity(state, product.id)
  

    const clickHandler = (type) => {
        dispatch({ type, payload: product })
    }

    

    return (
        <div className="flex flex-col justify-around w-80 md:w-64 h-[430px] p-3 shadow-2xl rounded-lg text-black">
            <img src={product.image} alt={product.title} className='rounded-md w-full h-52 mb-4' />
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">{shortestTitle(product.description)}</p>
            <p className='flex items-center'><BiDollar />
                {product.price}</p>

            <div className='p-3  w-full flex items-center justify-between'>
                <Link to={`/products/${product.id}`} className="text-gray-600 hover:text">
                    <TbShoppingBagExclamation className='text-2xl  hover:text-teal-700 transition-all ease-in-out' />
                </Link>

                <div className='flex  items-center justify-between'>
                    {
                        quantity === 0 ? (
                            <button onClick={() => clickHandler("ADD_PRODUCT")}
                                className='text-2xl text-gray-600'>
                                <TbShoppingBagPlus className='text-2xl hover:text-teal-700 transition-all ease-in-out' />
                            </button>
                        ) : (
                            <button onClick={() => clickHandler("INCREASE")}>
                                <BiPlus className='text-xl rounded-full bg-green-600 text-white' />
                            </button>
                        )
                    }

                    {!!quantity  && <p className='mx-2 font-semibold'>{quantity}</p>}
                    {
                        quantity === 1 && <button onClick={() => clickHandler("REMOVE_PRODUCT")}>
                            <FaTrash className='text-lg text-gray-600 ml-1 hover:text-red-600 transition-all ease-in-out' />
                        </button>
                    }


                    {
                        quantity > 1 &&
                        <button onClick={() => clickHandler("DECREASE")}>
                            <BiMinus className='text-xl rounded-full bg-red-500 text-white' />
                        </button>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ProductCard