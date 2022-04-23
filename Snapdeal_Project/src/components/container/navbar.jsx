import React from 'react'
import "./navbar.css"
import logo from "../images/sdlogo.svg"
import { NavLink , Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


export const Navbar = () => {
    const state = useSelector((state) => state.handlecart)
    return (
        <>
            <div className="headdiv">
                <div className="sub_headdiv">
                    <div className="head-details">
                        <p>Brand Waali Quality, Bazaar Waali Deal!</p>
                        <div className='sub_head_details'>
                            <p><Link to='/'>Home</Link></p>
                            <p><Link to='/products'>All Product</Link></p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="maindiv">
                <div className="sub-div">
                    <div className="logo">
                        <img src={logo} alt="" srcset="" />
                    </div>
                    <div className="inputbox">
                        <input type="text" placeholder="Search products & brands" name="search" />
                        <button type="search">Search</button>
                    </div>
                    <div className="login">
                        <Link to="/cart">CART</Link>
                        <Link to="/signin">signin</Link>
                    </div>
                </div>

            </div>
        </>
    )
}
