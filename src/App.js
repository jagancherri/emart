import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
//import {  Routes} from 'react-router-dom'; 
import Products from './component/Products';
import Product from "./component/Product";
import Cart from "./component/Cart";

function App () {
  return (
    <>
    <Navbar/>
    
      <Home/>
      <Products/>
      <Product/>
      <Cart/>
  
    </>
);
}

export default App;
