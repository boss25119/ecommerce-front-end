import NavBar from './Components/NavBar';
import Home from './Components/Home'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Products from './Components/Products';
import Product from './Components/Product'
import Cart from './Components/Cart'
import CheckOut from './Components/CheckOut'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path = "/" element = {<Home/>} />
        <Route exact path = "/products" element = {<Products/>} />
        <Route exact path = "/products/:id" element = {<Product/>} />
        <Route exact path = "/cart" element = {<Cart/>} />
        <Route exact path = "/checkout" element = {<CheckOut/>} />
      </Routes>
    </div>
  );
}

export default App;
