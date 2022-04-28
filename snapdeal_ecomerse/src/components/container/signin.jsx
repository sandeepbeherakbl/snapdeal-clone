import React from "react";
import "./signin.css"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export const Signin = () => {
    return (
        <>
            <div className="main_signin">
                <div className="list">
                    <div>
                        <h6>MANAGE YOUR ORDERS</h6>
                        <p>Track orders, manage cancellations & returns.</p>
                    </div>
                    <div>
                        <h6>SHORTLIST ITEMS YOU LOVE</h6>
                        <p>Keep items you love on a watchlist.</p>
                    </div>
                    <div>
                        <h6>AWESOME OFFERS UPDATES FOR YOU</h6>
                        <p>Be first to know about great offers and save.</p>
                    </div>
                </div>
                <div className="user">
                    <h5>Login/Sign Up On Snapdeal</h5>
                    <p>Please provide your Mobile Number or Email to Login/ Sign Up on Snapdeal</p>
                    <form className="reg" action="">
                        <input type="text" placeholder="Enter Name" />
                        <input type="text" placeholder="Enter Email/Mobile" />
                        <input type="text"  placeholder="Enter password" />
                        <Link to={`/`}>
                            <Button className="submit" variant="contained" >
                                CONTINUE
                            </Button>
                        </Link>
                    </form>
                    <h6>or Login Using</h6>
                    <div className="social">
                        <div className="fv">
                            <Button className="fb" variant="contained" disableElevation>
                                Facebook
                            </Button>
                        </div>
                        <div className="google">
                            <Button variant="contained" disableElevation>
                                Google
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
