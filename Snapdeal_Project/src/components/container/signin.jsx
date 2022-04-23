import "./signin.css"
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';


export const Signin = () => {
    return (
        <>
            <div className="Signin_Maindiv image">
                <div className="left">
                    <div>
                        <p>MANAGE YOUR ORDERS</p>
                        <p>Track orders, manage cancellations & returns.</p>
                    </div>
                    <div>
                        <p>SHORTLIST ITEMS YOU LOVE</p>
                        <p>Keep items you love on a watchlist.</p>
                    </div>
                    <div>
                        <p>AWESOME OFFERS UPDATES FOR YOU</p>
                        <p>Be first to know about great offers and save.</p>
                    </div>

                </div>
                <div></div>
                <div className="right">
                    <p>Login/Sign Up On Snapdeal<span>
                       <CloseIcon />
                    </span></p>

                    <div className="subhead">
                        <p>Please provide your Mobile Number or Email to Login/ Sign Up on Snapdeal</p>
                    </div>

                    <form action="" className="reg_form">
                        <input type="text" placeholder="Enter Name" />
                        <input type="text" placeholder="Enter Email" />
                        <input type="text" placeholder="Enter Passworrd" />
                        <Button variant="contained" >
                            REGISTER
                        </Button>
                    </form>

                    <h5>or Login Using</h5>
                    <div className="social">
                        <div className="fb">
                            Facebook
                        </div>
                        <div className="Google">
                            Google
                        </div>
                    </div>
                

                </div>
            </div>
        </>
    )

}