import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./productpage3/Navbar";
import Home from "./productpage3/Home";
import ProductDetails from "./productpage3/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Login from "./productpage3/Login";
 
function App() {
  return (
    <>
    <Navbar/>
    <Login />
    <Home/>
    <ProductDetails/>
    <ProductDetails/>
    


    
    </>
       
  );
}

export default App;
