import React from "react";
import {Link} from 'react-router-dom';
import { House, Phone, PhosphorLogo, ShoppingCart, SignIn, User} from "phosphor-react"

export const Navbar=()=>{
    return(
        // <div></div>
        <div className="navbar">
            <div className="links">
                <Link to="/"><House size={32}/></Link>
                {/* {!(value)? */}
                {/* <Link to="/login">Login</Link> */}
                {/* } */}

                <Link to="/signup"><SignIn  size={32}/></Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart"><ShoppingCart size={32}/></Link>
                <Link to="/conductus"><Phone size={32}/></Link>
                <Link to="/profile"><User size={32}/></Link>
            </div>
          </div>
    );
}