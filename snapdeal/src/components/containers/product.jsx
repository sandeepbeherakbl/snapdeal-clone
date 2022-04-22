import { useDispatch, useSelector } from "react-redux"
import { Category } from "./category"
import "./product.css"
import axios from "axios";
import { useEffect } from "react";
import { setProduct } from "../redux/action/action";
import Button from '@mui/material/Button';
import styles from "styled-components";


export const Product = () => {

    const products = useSelector((state) => state.allreducer.product)
    const Renderlist = products.map((product) => {
        const { id, titel, image, price, } = product;
        return (
            <div className="proddiv" key={id}>
                <div className="image">
                    <img src={image} alt={titel} />
                </div>
                <div className="content">
                    <p>{titel}</p>
                    <p>{price}</p>
                </div>
                <Button variant="contained" disableElevation 
                    style={{
                        "backgroundColor": "#e40046",
                        "color": "white"
                      }}
                >
                    ADD TO CART
                </Button>

            </div>
        )
    })

    const dispatch = useDispatch();

    const fetchproduct = async () => {
        const response = await axios
            .get("http://localhost:3004/products")
            .catch((err) => {
                console.log(err)
            });
        dispatch(setProduct(response.data));
    }

    useEffect(() => {
        fetchproduct();
    }, []);

    console.log(products)
    return (
        <>
            <div className="prod_maindic">
                <Category />

                <div className="allprod">
                    <div className="products">
                        <p>Trending Products</p>

                        <div className="prod_gallery">
                            {Renderlist}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}