import React, { useContext, useState } from "react";
// import { Product } from "../shop/product";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";
export const Cart=()=>{
    const{cartItems,getTotalCartAmount}=useContext(ShopContext);
    const totalAmount=getTotalCartAmount();
    const navigate=useNavigate();
    return(
    <div className="cart">
        <div>
            <h1>Your cart Items</h1>
        </div>
<div className="cartItems">
    {PRODUCTS.map((product)=>{
if(cartItems[product.id]!==0)
{
return<CartItem data={product}/>
}
    })}
</div>
{totalAmount>0?
<div className="checkout">
    
    <p>Subtotal:${totalAmount}</p>
    <button onClick={()=>navigate("/shop")}>Continue Shopping</button>
    <button onClick={()=>alert("your Purchased items and its total"+totalAmount )}>Checkout</button>
</div>
:<h1>Your Cart is Empty</h1>}
    </div>
    );
}