import './BuyBtn.css'

function ShowBtn(props) {
    const filterProduct = (cat) => {
        const updatedList = props.data.filter((item) => item.category === cat)
        props.setFilter(updatedList)
        console.log("props.data", props.data)
    }
    return (
        <div className="buttons mb-3 d-flex justify-content-center pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => props.setFilter(props.data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
        </div>
    )
}

export default ShowBtn