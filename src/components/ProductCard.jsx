import React from 'react';
import { shortestTitle } from '../utils/helper';
import { Link } from 'react-router-dom';
import { TbShoppingBagExclamation, TbShoppingBagPlus, TbTrash } from 'react-icons/tb';
import { BiDollar } from 'react-icons/bi';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
    const [state, dispatch] = useCart()

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }

    const handleRemoveFromCart = () => {
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: product
        })
    }
    console.log(state)

    return (
        <div className="flex flex-col justify-around w-64 h-[430px] p-3 shadow-xl rounded-md text-black">
            <img src={product.image} alt={product.title} className='rounded-md w-full h-52 mb-4' />
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">{shortestTitle(product.description)}</p>
            <p className='flex items-center'><BiDollar /> {product.price}</p>

            <div className='p-3 text-2xl w-full flex items-center justify-between'>
                <Link to={`/products/${product.id}`} className="text-gray-600 hover:text">
                    <TbShoppingBagExclamation className='hover:text-teal-700 transition-all ease-in-out' />
                </Link>
                <div className='flex items-center justify-between'>
                    <button onClick={handleAddToCart}
                        className='text-2xl text-gray-600'>
                        <TbShoppingBagPlus className='hover:text-teal-700 transition-all ease-in-out' />
                    </button>
                    <button onClick={handleRemoveFromCart}>
                        <TbTrash />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard