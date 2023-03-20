import React from 'react'
import ShowBtn from "./ShowBtn"
import {NavLink} from "react-router-dom"
function ShowProducts(props) {
    return(
        <>
            <ShowBtn setFilter = {props.setFilter} data ={props.data} />
            {props.filter.map((product) => (
                         <div key= {product.id} className="col-md-3 mb-4 mt-2">
                            <div className="card h-100 text-center p-4" >
                                <img src={product.image} className="card-img-top" alt={product.title} style = {{height : "250px"}}/>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title}</h5>
                                    <p className="card-text lead fw-bold">$ {product.price}</p>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark buy-btn">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>                
            ))}
        </>
    )
}

export default ShowProducts