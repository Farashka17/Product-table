import { useState } from 'react'
import './App.css'


import Header from './components/layout/header'
import Footer from './components/layout/footer'
import HomePage from './pages/home/home'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/products/products'
import AddProductPage from './pages/addProduct/addProduct'
import EditProductsPage from './pages/editProducts/editProducts'


function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<HomePage/>} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/addProducts" element={<AddProductPage/>} />
      <Route path="/editProducts" element={<EditProductsPage/>} />



     


    </Routes>
    <Footer/>
  {/* <SingleNews/> */}

    </>
  )
}

export default App
