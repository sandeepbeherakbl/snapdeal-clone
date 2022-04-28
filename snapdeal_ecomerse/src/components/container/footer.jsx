import React from "react";
import footer from "../images/footer.jpg";
import mobile from "../images/mobile.jpg"
import "./footer.css"

export const Footer = () => {
    return(
        <>
            <div className="mob">
                <img src={mobile} alt="" />
            </div>
            
            <div className="foo">
                <img src={footer} alt="" />
            </div>
        </>
    )
}