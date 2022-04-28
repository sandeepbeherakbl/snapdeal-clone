import React from "react";
import logo from "../images/sdLogo.svg"
import banner from "../images/topbanner.jpg"
import { Link } from "react-router-dom";
import './navbar.css'

export const Navbar = () => {
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
                        <input type="text" placeholder="Search Product & Brands" />
                        <button>Search</button>
                    </form>
                </div>
                <div className="button">
                    <Link to={`/cart`}>
                    <button>cart</button>
                    </Link>
                    <Link to={`/signin`}>
                    <button>Sign In</button>
                    </Link>
                </div>
            </div>
            
        </>
    )
}