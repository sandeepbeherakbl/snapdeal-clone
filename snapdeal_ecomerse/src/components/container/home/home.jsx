import React from "react";
import { Navbar } from "../navbar";
import { Category } from "../../container/category";
import { Footer } from "../footer";


export const Home = () => {
    return(
        <>
            <Navbar/>
            <Category/>
            <Footer/>
            
        </>
    )
}