import React from "react";
import { Navbar } from "../navbar";
import { Category } from "../../container/category";
import { Footer } from "../footer";
import ProductPage from "../Product/productdisplay";


export const Home = () => {
    return(
        <>
            <Category/>
            <ProductPage/>
            <Footer/>
        </>
    )
}