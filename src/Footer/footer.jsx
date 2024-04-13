import React from "react";
import './styles3.css';
// import {FaYoutube,FaTwitter,FaWhatsapp,FaInstagram} from "react-icons/fa";
import { FacebookLogo,YoutubeLogo,TwitchLogo,InstagramLogo,WhatsappLogo } from "phosphor-react";
export const Footer=()=>{
    return(
<div>
    <footer class="footer">
        <div className="container1">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a className="a1"href="#">about us</a></li>
                        <li><a className="a1"href="#">our services</a></li>
                        <li><a className="a1"href="#">privacy policy</a></li>
                        <li><a className="a1"href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>gethelp</h4>
                    <ul>
                        <li><a className="a1"href="#">FAQ</a></li>
                        <li><a className="a1"href="#">shipping</a></li>
                        <li><a className="a1"href="#">returns</a></li>
                        <li><a className="a1"href="#">orders status</a></li>
                        <li><a className="a1"href="#">payment options</a></li>
                        <li><a className="a1"href="#">orders</a></li>
                        
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><a className="a1"href="#">watch</a></li>
                        <li><a className="a1"href="#">bag</a></li>
                        <li><a className="a1"href="#">shoes</a></li>
                        <li><a className="a1"href="#">dress</a></li>
                        
                    </ul>
                </div>
               
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                  
                        <a href="#"><FacebookLogo/></a>
                        <a href="#"><TwitchLogo/></a>
                        <a href="#"><WhatsappLogo/></a>
                        <a href="#"><InstagramLogo/></a>
                        
                        </div>
                </div>
            </div>
        </div>
    </footer>

</div>
    );
}
