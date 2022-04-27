import React from "react";
import logo from "../images/sdLogo.svg"
import banner from "../images/topbanner.jpg"
import './navbar.css'

export const Navbar = () => {
    return(
        <>
            <div className="dark">
                    <p>Brand Waali Quality, Bazaar Waali Deal!</p>
                    <div>
                        <button>Home</button>
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
                    <button>cart</button>
                    <button>Sign In</button>
                </div>
            </div>
            
        </>
    )
}