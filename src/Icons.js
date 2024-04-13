// // import React, { useState } from "react";
// // import {FaEye,FaEyeSlash} from 'react-icons/fa';
// // export const Icons=()=>
// // {
// //     const [visible,setvisible]=useState(false);
// //     {visible ?<FaEye className="icons eye"/>:
// //     <FaEyeSlash className="icons eyeslash"/>
// // }
// // const InputType=visible?"text":"password";
// //     return(
// //         <div>
// //            {/* {visible ?<FaEye className="icons eye"/>:
// //             <FaEyeSlash className="icons eyeslash"/>
// //     } */}
// //     <div className="container">
// //         <div className="card shadow-lg">
// //     <form >
// //         <label>Name:</label>
// //         <input type="text"className="form-control"placeholder="enter name"/>
// //         <div>
// //         <label>password</label>
// <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />
// //         </div>
// //         <label>confirm passowrd</label>
// //         <input type="password"className="form-control"placeholder="enter confirmpassword"/>
// //         <button className="btn btn-warning">Click me!</button>
// //     </form>
// //     </div>
// //     </div>
// //         </div>
// //     );
// // }
// // import { useState } from "react/cjs/react.development";
// import { useState } from 'react';
//  import {FaEye,FaEyeSlash} from 'react-icons/fa';
// export  const Icons=()=>{

//     const [passwordType, setPasswordType] = useState("password");
//     const [passwordInput, setPasswordInput] = useState("");
//     const handlePasswordChange =(evnt)=>{
//         setPasswordInput(evnt.target.value);
//     }
//     const togglePassword =()=>{
//       if(passwordType==="password")
//       {
//        setPasswordType("text")
//        return;
//       }
//       setPasswordType("password")
//     }
//     return(

//         <div className="row">
//             <div className="col-sm-3">
//                 <div className="input-group my-4 mx-4">
//                     <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />
//                     <div className="input-group-btn">
//                      <button className="btn btn-outline-primary" onClick={togglePassword}>
//                      { passwordType==="password"?<FaEye className="icons eye"/>:
//      <FaEyeSlash className="icons eyeslash"/>  }
//                      </button>
//                     </div>
//                 </div>
                
//             </div>
//       </div>
      
//     )

// }
