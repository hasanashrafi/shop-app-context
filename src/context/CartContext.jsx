import { createContext, useContext, useReducer } from 'react'
import { sumProducts } from '../utils/helper'

const initialState = {
  selectedProducts: [],
  productsCounter: 0,
  total: 0,
  checkout: false
}

const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case 'ADD_PRODUCT':
      if (!state.selectedProducts.find((item) => item.id === action.payload.id)) {
        state.selectedProducts.push({ ...action.payload, quantity: 1 })
      }
      return {
        ...state,
        checkout: false,
        ...sumProducts(state.selectedProducts)
      }

    case 'REMOVE_PRODUCT':
      const newSelectedProducts = state.selectedProducts.filter((product) => product.id !== action.payload.id)
      return {
        ...state,
        selectedProducts: [...newSelectedProducts],
        ...sumProducts(newSelectedProducts)
      }

    case 'INCREASE':
      const increaseIndex = state.selectedProducts.findIndex(product => product.id === action.payload.id)
      state.selectedProducts[increaseIndex].quantity++

      return {
        ...state,
        ...sumProducts(state.selectedProducts),

      }

    case 'DECREASE':
      const decreaseIndex = state.selectedProducts.findIndex(product => product.id === action.payload.id)
      state.selectedProducts[decreaseIndex].quantity--

      return {
        ...state,
        ...sumProducts(state.selectedProducts),

      }

    case 'CHECKOUT':
      return {
        selectedProducts: [],
        checkout: true
      }

    default:
      return state
  }
}


const CartContext = createContext()

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext)
  return [state, dispatch]
}


export default CartProvider
export { useCart }