import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/container/navbar'
import { Home } from './components/container/home'
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import { Products } from './components/container/product'
import { Product } from './components/container/products'
import { Cart } from './components/container/cart'
import { Signin } from './components/container/signin'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='products' element={<Products/>} />
        <Route exact path='Products/:id' element={<Product/>} />
        <Route exact path='cart' element={<Cart/>} />
        <Route exact path='signin' element={<Signin/>} />
      </Routes>
      
      
    </>
  )
}

export default App
