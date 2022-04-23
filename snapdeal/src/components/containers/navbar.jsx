import "./component.css";
import logo from "../images/sdlogo.svg"
import { Category } from "./category";
import { useState } from "react";

export const Navbar = () => {
    const [term, setTerm] = useState("")
    const submitHandler = (e) => {
        e.preventdefault()
    }
    return(
        <>
            <div className="headdiv">
                <div className="sub_headdiv">
                    <div className="head-details">
                        <p>Brand Waali Quality, Bazaar Waali Deal!</p>
                    </div>
                </div>
            </div>
            <div className="maindiv">
                <div className="sub-div">
                    <div className="logo">
                        <img src={logo} alt="" srcset="" />
                    </div>
                    <div className="inputbox" onSubmit={submitHandler}>
                        <input type="text" placeholder="Search products & brands" name="search" value={term} onChange={(e)=>{e.target.value} } />
                        <button type="search">Search</button>
                    </div>
                    <div className="login">
                        <p>Cart</p>
                        <p>signIn</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}