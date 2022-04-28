import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from '../redux/action/action'
import './cart.css'

const Cart = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()

    const handleClose = (items) => {
        dispatch(delItem(items))
    }

    const cartItems = (cartItem) => {
        const { id, title, image, price, category } = cartItem;
        return (
            <div className="cart_div" key={id}>
                <div className="cartcontainer">
                    <img src={image} alt="" />
                    <p>{title}</p>
                    <h3>{price}</h3>
                </div>
                <div className="remove">
                    <button onClick={() => handleClose(cartItems)}>
                        REMOVE
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="cartshow">
            <h3>Shopping Cart</h3>
            <div className="carthead">
                <div className="det">
                    <p>Item Details</p>
                </div>
                <div className="detl">
                    <p>Price</p>
                </div>
            </div>
        </div>
    )
};

export default Cart;