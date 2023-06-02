import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App () {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/ProductList" element={<ProductList/>}/>
        </Routes>
      </Router>
        
      
  )
}

export default App;