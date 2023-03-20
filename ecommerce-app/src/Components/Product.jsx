import React, {useState, useEffect} from 'react'
import { useDispatch} from 'react-redux'
import {addCart, deleteCart} from '../redux/action/index'
import {NavLink,useParams} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
export default function Product() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    const handleCart = (product) => {
        if (cartBtn === "Add to Cart"){
            dispatch(addCart(product))
            setCartBtn("Remove from cart")
        }else {
            dispatch(deleteCart(product))
            setCartBtn("Add to Cart")
        }
    }
    
    useEffect(() => {
        const getProduct = async() => {
             setLoading(true)
             const response = await fetch(`http://localhost:8080/products/${id}`)
             setProduct(await response.json())
             setLoading(false)
        }
        getProduct()
    }, [id])
    const Loading = () => {
        return (
            <>
            <div className="col-md-6">
                <Skeleton height={400}/>
            </div>
            <div className="col-md-6">
                <Skeleton height={50} width= {300} />
            </div>
            <div className="col-md-6" style= {{lineHeight: 2}}>
                <Skeleton height={75}/>
                <Skeleton height={25} width= {150} />
                <Skeleton height={50} />
                <Skeleton height={150} />
                <Skeleton height={50} width= {100}/>
                <Skeleton height={50} width= {100} style = {{marginLeft: 6}}/>

            </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height = "400px" width = "400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className = "display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark" onClick = {() => handleCart(product)}>
                        {cartBtn}
                    </button>
                    <NavLink to = "/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to cart
                    </NavLink>
                </div>
            </>
        )
    }
  return (
    <div className = "container py-5">
        <div className="row py-4">
              {loading ? <Loading/> : <ShowProduct/> }
        </div>
    </div>
  )
}
