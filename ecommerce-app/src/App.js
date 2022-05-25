import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Route, Routes } from 'react-router-dom';
import {useEffect} from 'react'
import './App.css';
import SignIn from './Components/Auth/SignIn';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Product from './Components/Product';
import Products from './Components/Products';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyAjvF_zWHuk66-PZGioe3pDMcdQ-EqFdX8',
  authDomain: 'ecommerce---app.firebaseapp.com',
};
firebase.initializeApp(config);
function App() {
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("User is not logged in!")
        return
      }
      console.log("Logged in user: ", user.displayName)
      const token = await user.getIdToken()
      console.log("Logged in user token: ", token)

    });
    return () => unregisterAuthObserver();
  }, [])
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
