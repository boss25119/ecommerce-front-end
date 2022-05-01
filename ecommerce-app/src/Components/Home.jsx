import React from 'react'
import bg from '../assets/bg.jpg'
import Products from './Products'
export default function Home() {
  return (
    <div className = "hero">
        <div className="card bg-dark text-white border-0">
            <img src={bg} className="card-img" alt="Background" height="550px"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className = "container">
                    <h5 className="card-title display-3 fw-bold mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
                </div>
            </div>
        </div>
        <Products/>
    </div>
  )
}
