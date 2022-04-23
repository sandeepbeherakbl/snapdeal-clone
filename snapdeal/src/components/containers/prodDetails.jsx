import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom"
import selectedProduct from "../redux/action/action"
import Button from '@mui/material/Button';
import "./productdetails.css"

const ProductDetails = () => {
    const productid = useParams();
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product)
    const {image, titel, price, decs} = product;
    console.log(product);


    const fetchProduct = async () => {
        const response = await axios 
        .get(`http://localhost:3004/products/${id}`)
        .catch((err) => {
            console.log(err);
        });

        dispatch(selectedProduct(response.data))
    }

    useEffect(()=>{
        if(productid && productid != "")
        fetchProduct();
    },[productid])


    return(
        <>
          <div className="detailspage">
              <div className="details_image">
                  <img src={image} alt="" />
              </div>
              <div className="details_content">
                  <h1>{titel}</h1>
                  <h2>{price}</h2>
                  <h3>{decs}</h3>
                  
                  <Button variant="contained" disableElevation
                    style={{
                        "backgroundColor": "#e40046",
                        "color": "white",
                        "textDecoration": "none",
                        "marginLeft": "20px"
                    }}
                >
                    ADD TO CART
                </Button>
              </div>
          </div>
        </>
    )
}

export default ProductDetails;