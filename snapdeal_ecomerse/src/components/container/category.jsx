import React from "react";
import banner from "../images/topbanner.jpg"
import login from "../images/sidebar.png"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./category.css"

export const Category = () => {
    return (
        <>
            <div className="mainidv">
                <div className="sub">
                    <div className="cat_list">
                        <h6>Top Category</h6>
                        <Link to={`/mens`}>
                        <p>Men</p>
                        </Link>
                        <Link to={`/women`}>
                        <p>Women</p>
                        </Link>
                        <Link to={`/jwel`}>
                        <p>Beauty</p>
                        </Link>
                        <Link to={`/elec`}>
                        <p>Electronics</p>
                        </Link>
                    </div>
                    <div className="baner">
                        <img src={banner} alt="" />
                        <div className="buttons">
                        <Link to={`/mens`}>
                        <p>Men</p>
                        </Link>
                        <Link to={`/women`}>
                        <p>Women</p>
                        </Link>
                        <Link to={`/jwel`}>
                        <p>Beauty</p>
                        </Link>
                        <Link to={`/elec`}>
                        <p>Electronics</p>
                        </Link>
                        </div>
                    </div>
                    <div className="login">
                        <img src={login} alt="" />
                        <p>Login to your</p>
                        <p>Snapdeal account</p>
                        <Button variant="contained" disableElevation>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
            <div className="trending">
                <h1>Trending Products</h1>
            </div>
        </>
    )
}