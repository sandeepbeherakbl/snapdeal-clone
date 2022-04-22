import banner from "./images/topbanner.jpg";
import pincode from "./images/pincode.jpg";
import "./category.css"

export const Category = () => {
    return (
        <>
            <div className="cat_maindiv">
                <div className="catdiv">
                    <div className="subdiv1">
                        <h4>Top Category</h4>
                        <p>Men</p>
                        <p>Women</p>
                        <p>Elecrtronics</p>
                        <p>Beauty</p>
                    </div>
                    <div className="subdiv2">
                        <img src={banner} alt="" />
                    </div>
                    <div className="subdiv3">
                        <img src={pincode} alt="" />
                        <p>Your Delivery Pincode</p>
                        <p>Enter Your Pincode To check Availability</p>
                        <form action="">
                            <label htmlFor="">pincode</label>
                            <input type="text" />
                        </form>
                        <button>Change Pincode</button>
                    </div>
                </div>
            </div>
        </>
    )
}