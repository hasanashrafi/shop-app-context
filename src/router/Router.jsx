import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../layout/Layout';
import NotFoundPage from '../components/NotFoundPage';
import ProductsPage from '../pages/ProductsPage';
import DetailsPage from '../pages/DetailsPage';
import CheckOutPage from '../pages/CheckOutPage';
import ProductsProvider from '../context/ProductContext';
import CartProvider from '../context/CartContext';




function Router() {
  return (
<CartProvider>
<ProductsProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
</ProductsProvider>
</CartProvider>

  )
}

export default Router