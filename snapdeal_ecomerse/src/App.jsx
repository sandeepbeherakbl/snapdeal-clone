import './App.css'
import { Navbar } from './components/container/navbar/navebar'
import { ProductPage } from './components/container/product/productlisting'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ProductDetails } from "./components/container/product/productDetails";

function App() {

  return (
    <div className="App">
      <Navbar />
      
      <ProductDetails/>
      <ProductPage/>
      {/* <Routes>
        <Route exact path='/' element={<ProductPage/>} />
        <Route exact path='Product/:id' element={<ProductDetails />} />
      </Routes> */}
    </div>
  )
}

export default App
