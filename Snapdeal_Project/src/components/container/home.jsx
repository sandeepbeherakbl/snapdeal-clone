import './home.css';
import banner from '../images/topbanner.jpg'
import pincode from "../images/pincode.jpg"
import {Products } from './product';

export const Home = () => {
    return(
        <>

            <div className="home_main">
                <div className="home_sub">
                    <div className="blank"></div>
                    <div className="banner">
                        <img src={banner} alt="" />
                    </div>
                    <div className="pin">
                    <img src={pincode} alt="" />
                        <h4>Your Delivery Pincode</h4>
                        <p>Enter Your Pincode To check Availability</p>
                        <form action="">
                            <label htmlFor="">pincode</label>
                            <input type="text" />
                        </form>
                        <button>Change Pincode</button>
                    </div>
                </div>
                <Products/>
            </div>

        </>
    )
}