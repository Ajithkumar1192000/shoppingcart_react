import React from "react";
import {set, useForm} from "react-hook-form";
// import { useRef } from "react";
import{auth,provider} from  "./config";
import {signInWithPopup} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import './styles1.css';
import { Shop } from "../shop/shop";
import { Signup } from "./signup";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
// import {login} from "./firebase";



export const  Login=()=>{
     

    const {register,handleSubmit,formState:{errors}}=useForm({
        mode:"onBlur",
  
});
    const handleRegistration=(data)=>console.log(data);

    // const handleError=(errors)=>{};
    const registerOptions={
       
        email:{required:"Email is required",
        pattern:{
             value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,

            message:"enter the valid email address"
        }
    
    },
        password:{required:"password is required",
    minLength:{
        value:8,
        message:"password mush have at least 8 characters"
    }
    },
    
};

const [value,setValue]=useState('');
const handleclick=()=>{
    signInWithPopup(auth,provider).then((data)=>{
setValue(data.user.email);
setValue(data.user.displayName);
localStorage.setItem("email",data.user.email);
localStorage.setItem("Name",data.user.displayName);
    })
}
useEffect(()=>{
    setValue(localStorage.getItem('email'))
})
// const auth=getAuth(login);
const [email, setEmail] = useState('');
const [password,setPassword]=useState('');
const click=()=>{
    createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    localStorage.setItem("email",userCredential.user.email);
    
    // ...
    // setValue(userCredential.user.email);
    // setValue(userCredential.user.password);
  })
  .catch((err) => {
    console.log(err.code);
    console.log(err.message);
  });
}
    return(
        <div>
             {(value)?<Shop/>:
              <center>
            <h1 className="h1">Welcome to login page</h1>
            <div className="card shadow-lg"id="card2">
      
            <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
            
        <h5>Login</h5>
                <label>Email:</label>
                <div className="col-lg-6">
                <input name={"email"}className="form-control"{...register('email',registerOptions.email)}onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <small className="text-danger">
                    {errors?.email&&errors.email.message}
                </small>
            </div>
            <div>
                <label>Password:</label>
                <br/>
                <div className="col-lg-6">
                    <input type={"password"}className="form-control"{...register('password',registerOptions.password)}onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <small className="text-danger">
            {errors?.password&&errors.password.message}
            </small>
            </div>
            <br/>
            <button className="btn btn-dark"onClick={click}>Login</button>

              <br/>
              <br/>
            <button className="btn btn-dark" onClick={handleclick}>Login with google</button><br/>
            <br/>

            </form>
           

        </div>
        </center>
       
    
 } 
    
        </div>
    );
}
