
import { BiMinus, BiPlus } from 'react-icons/bi'
import { productQuantity, shortestTitle } from '../utils/helper'
import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { TbShoppingBagPlus } from 'react-icons/tb'

function BasketCard({ product, dispatch, state }) {
    const quantity = productQuantity(state, product.id)

    const { productCounter, total } = state
    const clickHandler = (type) => {
        dispatch({ type, payload: product })
    }

    return (
        <div className=''>
            <div className='w-full md:w-1/2 mx-auto p-4 text-teal-800'>

                <div className='flex items-center  justify-between p-2 border-b border-gray-200'>
                    <img src={product.image} className='rounded size-12' />
                    <p>{shortestTitle(product.title)}</p>
                    <p>{product.price}</p>
                    <p className='rounded-full text-white bg-orange-700 px-1'>x{product.quantity}</p>
                  
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

                        {!!quantity && <p className='mx-2 font-semibold'>{quantity}</p>}
                      
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
                    <div className='flex justify-between p-2 border-t border-gray-200'>
                    <p>Total:</p>
                    <p>${total}</p>
                </div>

                <button className='absolute bottom-1 right-0 left-0 m-2 text-center p-1.5 hover:bg-teal-500 ease-in-out transition-all hover:text-white bg-white rounded-lg text-teal-700 '
                    onClick={() => clickHandler("CHECKOUT")}>
                    CheckOut
                </button>
                </div>
                
            </div>
        </div>
    )
}

export default BasketCard