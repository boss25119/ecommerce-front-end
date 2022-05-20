import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteCart} from '../redux/action'
import {NavLink} from 'react-router-dom'

const Cart = () => {
    
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteCart(id))
    }
    

    const cartItems = (cartItem) => {
        
        return (
            <div className="px-4 my-5 bg-light rounded-3" key = {cartItem.id}>
                <div className="container py-4">
                    <button className="btn-close float-end" aria-label= "Close" onClick={handleDelete}></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height = "200px" width= "180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className= "lead fw-bold">${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3">
                <h2 className ="lead fw-bold">Your card is empty</h2>
                <NavLink className="nav-link" to="/products">Click here to comeback to Products page</NavLink>
            </div>

        )
    }
    const checkOutBtn = () => {
        return (
            <div className="container float-left">
                <div className="row">
                    <NavLink className ="btn btn-outline-primary mb-5 w-25 mx-auto" to= "/checkout">Proceed to Check Out</NavLink>
                </div>
            </div>
        )
    }
   return (
      <>
        { state.length === 0 && emptyCart()}
        { state.length !==0 && state.map(cartItems)}
        {state.length !==0 && checkOutBtn()}
      </>
        
  )
}

export default Cart
