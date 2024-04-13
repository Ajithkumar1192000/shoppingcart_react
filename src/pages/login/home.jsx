import React from "react";
// import './styles1.css';
// import AmazonLogo from './assets1/amazon.png';
// import styled from "styled-components";


// const StyledButton = styled.button`
//   min-width: 200px;
//   border: none;
//   font-size: 18px;
//   padding: 7px 10px;

//   background-color: ${props => props.bg === "black" ? "black" : "blue"}
// `;



  
import { FacebookLogo,YoutubeLogo,TwitchLogo,InstagramLogo,WhatsappLogo, Wind } from "phosphor-react";


export const  Home=()=>{
    return(
        <div>
            <div className="Blankcard">
           {/* {AmazonLogo} */}
                 <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"id="amazon1"/> 
            <h1>Welcome to Amazon shop</h1>
            {/* <StyledButton bg="black">Button A</StyledButton>
            <StyledButton bg="blue">Button B</StyledButton> */}
            </div>
           <div className="user">
            <div className="olduser">
            <h3>Existing user</h3>
            <button className="btn btn-dark"onClick={()=>window.location.href="/Login"}>click here to login</button>
            </div>
            <div className="user1">
                <div className="newuser">
                    <h3>New user</h3>
                    <button className="btn btn-dark"onClick={()=>window.location.href="/Signup"}>create Account</button>
                </div>
            </div>
           </div>
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
                        <li><a className="a1"href="#">Watches</a></li>
                        <li><a className="a1"href="#">Laptop</a></li>
                        <li><a className="a1"href="#">DSLR</a></li>
                        <li><a className="a1"href="#">Men wear</a></li>
                        
                    </ul>
                </div>
               
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                  
                        <a href="https://www.facebook.com"><FacebookLogo/></a>
                        <a href="https://www.twitter.com"><TwitchLogo/></a>
                        <a href="https://www.whatsapp.com"><WhatsappLogo/></a>
                        <a href="https://www.instrgram.com"><InstagramLogo/></a>
                        
                        </div>
                </div>
            </div>
        </div>
    </footer>

</div>
        </div>
    );
}
