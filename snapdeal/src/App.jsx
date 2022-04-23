import { useState } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/containers/navbar'
import ProductDetails from './components/containers/prodDetails'
import { Product } from './components/containers/product'
import { Signin } from './components/containers/signin'

function App() {
  

  return (
    <div className="App">
      
        <Navbar/>
        <Product/>
      {/* <ProductDetails/> */}
      {/* <Signin/> */}
    </div>
  )
}

export default App
