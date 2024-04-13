import React from "react";
import {PRODUCTS} from '../../products';
import {Product} from './product';
import './shop.css';
export const Shop=()=>{
const logout=()=>{
    localStorage.clear();
    window.location.reload();
    window.location.href='/';
}
    return(
    <div className="shop">
        <div className="shoptitle">
            <h1>Amazon shop</h1>
            <center><button className="btn btn-dark" onClick={logout}>Logout</button></center>
        </div>
        <div className="products">{PRODUCTS.map((product)=>(<Product data={product}/>))}

        
        </div>
    </div>
    );
}