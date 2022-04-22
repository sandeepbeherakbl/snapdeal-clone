import { useState } from 'react'
import './App.css'
import { Navbar } from './components/containers/navbar'
import { Product } from './components/containers/product'
import { Signin } from './components/containers/signin'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Product/>
      {/* <Signin/> */}
    </div>
  )
}

export default App
