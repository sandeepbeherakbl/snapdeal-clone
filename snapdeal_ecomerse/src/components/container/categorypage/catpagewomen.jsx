import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/action/action";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './catpage.css';


const WomenCLothing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="grid" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <h1 className="header">{title}</h1>
                            <h3 className="meta price">$ {price}</h3>
                            <Button variant="contained" disableElevation>
                                ADD TO CART
                            </Button>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products/category/women's%20clothing")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products :", products);


    return (
        <div className="catpage">
            {renderList}
        </div>
    );
};

export default WomenCLothing;