// src/context/CartContext.jsx
import { createContext, useContext, useReducer } from 'react';
import { sumProducts } from '../utils/helper';

const initialState = {
  selectedProducts: JSON.parse(localStorage.getItem('cart')) || [],
  productsCounter: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).reduce((counter, product) => counter + product.quantity, 0) : 0,
  total: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2) : 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      if (!state.selectedProducts.find((item) => item.id === action.payload.id)) {
        state.selectedProducts.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.selectedProducts));
      return {
        ...state,
        checkout: false,
        ...sumProducts(state.selectedProducts),
      };

    case 'REMOVE_PRODUCT':
      const newSelectedProducts = state.selectedProducts.filter(
        (product) => product.id !== action.payload.id,
      );
      localStorage.setItem('cart', JSON.stringify(newSelectedProducts));
      return {
        ...state,
        selectedProducts: [...newSelectedProducts],
        ...sumProducts(newSelectedProducts),
      };

    case 'INCREASE':
      const increaseIndex = state.selectedProducts.findIndex(
        (product) => product.id === action.payload.id,
      );
      state.selectedProducts[increaseIndex].quantity++;
      localStorage.setItem('cart', JSON.stringify(state.selectedProducts));
      return {
        ...state,
        ...sumProducts(state.selectedProducts),
      };

    case 'DECREASE':
      const decreaseIndex = state.selectedProducts.findIndex(
        (product) => product.id === action.payload.id,
      );
      state.selectedProducts[decreaseIndex].quantity--;
      localStorage.setItem('cart', JSON.stringify(
        state.selectedProducts
      ));
      return {
        ...state,
        ...sumProducts(state.selectedProducts),
      };

    case 'CHECKOUT':
      localStorage.removeItem('cart');
      return {
        selectedProducts: [],
        checkout: true,
      };

    default:
      return state;
  }
};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };