import React, { useState } from "react";
import logo from "../images/sdLogo.svg"
import banner from "../images/topbanner.jpg"
import { Link } from "react-router-dom";
import './navbar.css'
import { useSelector } from "react-redux";

export const Navbar = () => {
    const [input, setInput] = useState(" ");

    const state = useSelector((state) => state.addItems)
    return(
        <>
            <div className="dark">
                    <p>Brand Waali Quality, Bazaar Waali Deal!</p>
                    <div>
                        <Link to={'/'}>
                        <button>Home</button>
                        </Link>
                    </div>
            </div>
            <div className="light">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="mid">
                    <form action="">
                        <input type="text" placeholder="Search Product & Brands" onChange={(e) => {
                                setInput(e.target.value);
                            }}/>
                        <button>Search</button>
                    </form>
                </div>
                <div className="button">
                    <Link to={`/cart`}>
                    <button>cart({state.length})</button>
                    </Link>
                    <Link to={`/signin`}>
                    <button>Sign In</button>
                    </Link>
                </div>
            </div>
            
        </>
    )
}