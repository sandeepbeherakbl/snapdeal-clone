import React from "react"
import { Home } from "./components/container/home/home"
import { Navbar } from "./components/container/navbar"
import ProductPage from "./components/container/Product/productdisplay"
import {Routes, Route} from "react-router-dom";
import ProductDetails from "./components/container/Product/productdetails";
import { Signin } from "./components/container/signin";
import { Cart } from "./components/container/cart";


function App() {
  return (
    <div className="App">
       
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:productId" element={<ProductDetails/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
