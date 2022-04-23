import React, { useState, useEffect } from "react";
import './product.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"

export const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const responnse = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await responnse.clone().json());
                setFilter(await responnse.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProduct();
    }, []);

    const filterProduct = (cat) => {
        const updatedlist = data.filter((x) => x.category === cat);
        setFilter(updatedlist)
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="cat_button">
                    <button className="all" onClick={() => setFilter(data)}>All</button>
                    <button className="men" onClick={() => filterProduct("men's clothing")}>Men</button>
                    <button className="women" onClick={() => filterProduct("women's clothing")}>Women</button>
                    <button className="electronics" onClick={() => filterProduct("electronics")}>Electronice</button>
                    <button className="beauty" onClick={() => filterProduct("jewelery")}>Beauty</button>
                </div>
                
                <h1 className="heading">Trending Products</h1>
                
                {filter.map((product) => {
                    return (
                        <>
                            <div className="maincard">
                                <div className="card">
                                    <div className="col">
                                        <div className="cardtext" key={product.id}>
                                            <img src={product.image} className="card-img" />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title.substring(0, 15)}</h5>
                                                <p className="card-text">${product.price}</p>
                                                
                                                    <Link to={`/products/${product.id}`} className="buy" >Buy Now</Link>
                                                    
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );
    };
    return (
        <>
            <div className="prod_container">
                <div className="disp_prod">
                    <div className="prod_row">
                        <ShowProduct />
                    </div>
                </div>
            </div>

        </>
    )
}