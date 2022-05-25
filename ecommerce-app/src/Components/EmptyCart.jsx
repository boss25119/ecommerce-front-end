import React from 'react'
import {NavLink} from 'react-router-dom'


export default function EmptyCart() {
  return (
    <div className="px-4 my-5 bg-light rounded-3">
        <h2 className ="lead fw-bold">Your card is empty</h2>
        <NavLink className="nav-link" to="/products">Click here to comeback to Products page</NavLink>
    </div>

    )
}
