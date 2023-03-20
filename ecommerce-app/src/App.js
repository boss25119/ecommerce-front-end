import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/Auth/SignIn';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Product from './Components/Product';
import Products from './Components/Products';

const config = {
  apiKey: 'AIzaSyAjvF_zWHuk66-PZGioe3pDMcdQ-EqFdX8',
  authDomain: 'ecommerce---app.firebaseapp.com',
};
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
        <Route exact path = "/signin" element = {<SignIn/>} />
      </Routes>
    </div>
  );
}

export default App;
