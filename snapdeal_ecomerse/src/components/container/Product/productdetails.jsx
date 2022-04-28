import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct, } from "../../redux/action/action";
import "./productdetails.css"
import Button from '@mui/material/Button';
import { addItem, delItem } from "../../redux/action/action";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Alarm } from "@mui/icons-material";

const ProductDetails = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { image, title, price, category, description,rating, rate, count } = product;
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);


    const handleCart = (product) =>{
        if(cartBtn === "Add to Cart"){
            dispatch(addItem(product))
            setCartBtn("Remove From Cart");
        }else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
            <div className="main_card">
                <div className="img_card">
                    <img src={image} />
                </div>
                <div className="details">
                    <h1>{title}</h1>
                    <hr />
                    <h5>{category}</h5>
                    <h2>Rs: {price}</h2>
                    <p>{description}</p>
                    <div className="bu">
                        <Button className="add" variant="contained" disableElevation onClick={() => handleCart(product)}>
                            {cartBtn}
                        </Button>
                        <Button className="buy" variant="contained" disableElevation>
                            Buy Now
                        </Button>
                    </div>
                </div>

            </div>
        </>

    );
};

export default ProductDetails;