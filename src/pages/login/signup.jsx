
import {useForm} from "react-hook-form";
import './styles1.css';
import { useState ,useRef } from "react";
import { useEffect } from "react";
import { Shop } from "../shop/shop";
import{auth,provider} from  "./config";
import {signInWithPopup} from "firebase/auth";

import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

 export const Signup=()=>{
    // const [passwordinputtype,ToggleIcon]=usePassword();

        const {register,handleSubmit,formState:{errors}}=useForm({
            mode:"onBlur"
    });
        const handleRegistration=(data)=>console.log(data);
    
        // const handleError=(errors)=>{};
        const registerOptions={
            name:{required:"Name is required"},
            email:{required:"Email is required",
            pattern:{
                value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
               message:"enter the valid email address"
           }},
            password:{required:"password is required",
        minLength:{
            value:8,
            message:"password mush have at least 8 characters"
        }
        },
        confirmpassword:{required:"confirm password is required",
        minLength:{
            value:8,
            message:"password mush have at least 8 characters"
        }
        }
    };
    // const [value,setValue]=useState('');
    // const handleclick=()=>{
    //     signInWithPopup(auth,provider).then((data)=>{
    // setValue(data.user.email);
    // setValue(data.user.displayName);
    // localStorage.setItem("email",data.user.email);
    // localStorage.setItem("Name",data.user.displayName);

    //     })
    // }
    // useEffect(()=>{
    //     setValue(localStorage.getItem('email'))
    // })
    
    //  const [email, setEmail] = useState('');

    //  const [displayName,setName]=useState('')
    // //const [value ,setValue]=useState('')
    // const click=()=>{
    //     createUserWithEmailAndPassword(auth,email,displayName)
    //   .then((userCredential) => {
    //     // Signed up 
    //     const user = userCredential.user;
    //     console.log(user);
    //     localStorage.setItem("email",userCredential.user.email);
    //     localStorage.setItem("Name",userCredential.user.displayName);
        
    //     // ...
    //     // setValue(userCredential.user.email);
    //     // setValue(userCredential.user.password);
    //   })
    //   .catch((err) => {
    //     console.log(err.code);
    //     console.log(err.message);
    //   });
    const name=useRef()
  const email=useRef();
const password=useRef();
const confirmpassword=useRef();
  const handleclick=()=>{
localStorage.setItem("name",name.current.value);
localStorage.setItem("email",email.current.value);
localStorage.setItem("signup password",password.current.value);
localStorage.setItem("signup confirmpassword",confirmpassword.current.value);
if(password.current.value===confirmpassword.current.value){
window.location.href="/Shop";
}
else{
    alert("the password is mismatch");
}

  }
//   const getEmail=localStorage.getItem("email");
//      const getName=localStorage.getItem("Name");
    //  const getpassword=localStorage.getItem("Password");
    //  const getconfirmpassword=localStorage.getItem("Confirm password");
    //  if(getpassword===getconfirmpassword){
    //    var value=0;
    const getpassword=localStorage.getItem("Password");
    const getconfirmpassword=localStorage.getItem("Confirm password");
    //  }
    //  else{
    //     value=1;
    //     alert("the password and confirm password is mismatch")
    //  }
    return(
        
        <div>
            {
        //    ({getpassword}==={getconfirmpassword})?<Shop/>:
        <center>
            <h1 className="h1">Welcome to Signup</h1>
            <div className="card shadow-lg"id="card1">
            <center>
            <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
            <h5>Signup</h5>
            <label>Name:</label>
            <div className="col-lg-6">
            <input name="name"className="form-control"{...register('name',registerOptions.name)}ref={name}/>
            </div>
            <small className="text-danger">
            {errors?.name&&errors.name.message}
            </small>
            </div>
            <div>
                <label>email:</label>
                <div className="col-lg-6">
                <input name={"email"}className="form-control"{...register('email',registerOptions.email)}ref={email}/>
                </div>
                <small className="text-danger">
                    {errors?.email&&errors.email.message}
                </small>
            </div>
            <div>
                <label>password:</label>
                <br/>
                <div className="col-lg-6">
                    <input type={"password"}className="form-control" {...register('password',registerOptions.password)}ref={password}/>
           {/* <span className="input-group-text">
            fa-eye
            <FontAwesomeIcon icon="User"/>
           </span> */}
            </div>
            <small className="text-danger">
            {errors?.password&&errors.password.message}
            </small>
            </div>
            <div>
            <label>Confirm password:</label>
            <div className="col-lg-6">
            <input type={"password"}className="form-control"{...register('confirmpassword',registerOptions.confirmpassword)}ref={confirmpassword}/>
            </div>
            <small className="text-danger">
            {errors?.confirmpassword&&errors.confirmpassword.message}
            </small>
            </div>

            <button className="btn btn-dark"id="btn"onClick={handleclick}>Signup</button>
        </form>
        </center>
        </div>
       </center>
 }
       </div>
        
     
    )

        

 }