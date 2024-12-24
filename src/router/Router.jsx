import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../layout/Layout';




function Router() {
  return (
   
      <BrowserRouter> 
         <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
         </Layout>
      </BrowserRouter>
 
  )
}

export default Router