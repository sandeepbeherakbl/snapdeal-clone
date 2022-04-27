import React from "react";
import banner from "../images/topbanner.jpg"
import login from "../images/sidebar.png"
import Button from '@mui/material/Button';
import "./category.css"

export const Category = () => {
    return (
        <>
            <div className="mainidv">
                <div className="sub">
                    <div className="cat_list">
                        <h6>Top Category</h6>
                        <p>Men</p>
                        <p>Women</p>
                        <p>Beauty</p>
                        <p>Electronics</p>
                    </div>
                    <div className="baner">
                        <img src={banner} alt="" />
                        <div className="buttons">
                            <p>Men</p>
                            <p>Women</p>
                            <p>Electronics</p>
                            <p>beauty</p>
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
        </>
    )
}