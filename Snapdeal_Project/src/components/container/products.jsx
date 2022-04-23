import "./products.css"
import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import {addCart} from '../redux/action/action'
import {useDispatch, useSelector} from 'react-redux';


export const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loding, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);



    const ShowProduct = () => {
        return (
            <>
                <div className="show_prod">
                    <div className="details" key={product.id}>
                        <img src={product.image} />
                    </div>
                    <div className="produ_details">
                        <h1>{product.title}</h1>
                        <hr />
                        <h4>${product.price}</h4>
                        <p>{product.description}</p>
                        <button onClick={()=> addProduct(product)}>
                            Add To Cart
                        </button>
                        <Link to='/Cart'>
                            Go To Cart
                        </Link>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="show">
                <ShowProduct />
            </div>
        </>
    )
}