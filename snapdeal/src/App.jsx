import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Product } from './components/product'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Product/>
    </div>
  )
}

export default App
