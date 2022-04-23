import { useSelector } from "react-redux"
import { Product } from "./products"

export const Cart = () => {
    return(
        <>
            <div className="cart_row">
                <div className="image">
                    <img src={Product.image}/>
                </div>
                <div>
                    <h3>{Product.title}</h3>
                    <p>Total Price = ${Product.price}</p>
                </div>
                <button></button>
            </div>
        </>
    )
}