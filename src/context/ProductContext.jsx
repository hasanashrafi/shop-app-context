import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/config'


const ProductContext = createContext()

function ProductsProvider({ children }) {
    const [products, setProducts] = useState()
    useEffect(() => {
     
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products')
                console.log(response)
                setProducts(response)
            } catch (error) {
                console.error(error)
            }
        }
        fetchProducts()
        
    }, [])

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => {
    const products = useContext(ProductContext)
    return products
}


export { useProducts }
export default ProductsProvider


