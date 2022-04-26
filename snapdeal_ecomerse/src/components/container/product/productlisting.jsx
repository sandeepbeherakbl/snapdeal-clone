import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../redux/action/action";
import './productlisting.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'




export const ProductPage = () => {
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("http://localhost:3004/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProduct(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    const RenderList = products.map((products) => {
        const { id, titel, image, price } = products;
        return (
            <>

                <div className="maincontainer" key={id}>
                    <div className="images">
                        <img src={image} alt="" />
                    </div>
                    <div className="Content">
                        <h1>{titel}</h1>
                        <h3>{price}</h3>
                    </div>
                    <div>
                        <Stack direction="row" spacing={2}>
                            <Link to={`Product/${id}`} >
                                <Button variant="outlined" color="secondary">
                                    Add To Cart
                                </Button>
                            </Link>
                        </Stack>
                    </div>
                </div>

            </>
        );
    });

    console.log(products);


    const [filter, setFilter] = useState(products);
    const filterProduct = (cat) => {
        const updatedlist = products.filter((x) => x.category === cat);
        setFilter(updatedlist)
    }
    return (
        <>
            <div className="FilterButton">
                <Box sx={{ '& button': { m: 1 } }}>
                    <Button variant="contained" size="small"
                        onClick={() => setFilter(products)}
                    >
                        All
                    </Button>
                    <Button variant="contained" size="small"
                        onClick={() => filterProduct("1")}
                    >
                        Men
                    </Button>
                    <Button variant="contained" size="small"
                        onClick={() => filterProduct("2")}
                    >
                        Women
                    </Button>
                    <Button variant="contained" size="small"
                        onClick={() => filterProduct("4")}
                    >
                        Beauty
                    </Button>
                    <Button variant="contained" size="small"
                        onClick={() => filterProduct("3")}
                    >
                        Electronics
                    </Button>
                </Box>
            </div>
            <div className="grid_container">
                {RenderList}
            </div>
        </>
    );
}