import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/config'


const ProductContext = createContext()

function ProductsProvider({ children }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
     
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products')
        
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

const useProductsDetail = (id)=>{
const  products = useContext(ProductContext)
const result = products.find(item=>item.id === id)
return result
}


export { useProducts , useProductsDetail }
export default ProductsProvider


