import React from 'react';
import './BuyBtn.css'

function ShowBtn(props) {
    const filterProduct = (cat) => {
        const updatedList = props.data.filter((item) => item.category_id === cat)
        props.setFilter(updatedList)
        console.log("props.data", props.data)
    }
    return (
        <div className="buttons mb-3 d-flex justify-content-center pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => props.setFilter(props.data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("1")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("2")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
        </div>
    )
}

export default ShowBtn