import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../layout/Layout';
import NotFoundPage from '../components/NotFoundPage';
import ProductsPage from '../pages/ProductsPage';
import DetailsPage from '../pages/DetailsPage';
import CheckOutPage from '../pages/CheckOutPage';




function Router() {
  return (

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

  )
}

export default Router