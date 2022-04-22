import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/containers/navbar'
import { Product } from './components/containers/product'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Product/>
    </div>
  )
}

export default App
