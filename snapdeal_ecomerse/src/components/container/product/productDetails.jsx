import React, {useEffect}from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {selectedProducts} from "../../redux/action/action"

export const ProductDetails = () => {
    const {productId} = useParams();
    const products = useSelector((state) => state.selectedproduct)
    const {image, titel, price, desc} =products;
    const dispatch = useDispatch();

    const fetchProdDetails = async(id) => {
        const response = await axios
        .get(`http://localhost:3004/products/${productId.id}`)
        .catch((err) => {
            console.log(err);
        });
        dispatch(selectedProducts(response.data))
    };

    useEffect(()=>{
        if(productId && productId !== "")
        fetchProdDetails(productId)
    },[productId])

    return(
        <>
        <div className="proddetail">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="detailcontaine">
                <h1>{titel}</h1>
                <h4>{price}</h4>
                <p>{desc}</p>
            </div>
        </div>
           
        </>
    )
};