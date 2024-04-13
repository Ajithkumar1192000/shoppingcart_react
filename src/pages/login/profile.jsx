import React from "react";
// import { useEffect,useState } from "react";
//import Avatar from "react-avatar-edit";
import { useState } from "react";
export const Profile=()=>{
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
       const getEmail=localStorage.getItem("email");
    const getName=localStorage.getItem("name");
    return (
        <div>
             <h2>Your Profile</h2>
             <div style={{
                
                               justifyContent:"space-around",
                                margin:"18px 0px",
                               display:"flex",
                             
                                borderBottom:"1px solid grey"}}>
                                
            <center> 
            <input type="file" onChange={handleChange} />  
            <img src={file} /></center>
  </div>
  <center>
  <h1>{getName}</h1>
                <h1>{getEmail}</h1></center>
        </div>
  
    );
      
//     const getEmail=localStorage.getItem("email");
//      const getName=localStorage.getItem("name");

//  const [src,setsrc]=useState(null);
//  const [preview,setPreview]=useState(null);
// const onClose=()=>{
//     setPreview(null);

// }
//  const onCrop=view=>{
//          setPreview(view)
//  }
 
// useEffect(()=>{
//     console.log(preview);
    
// },[])
//     return(
//         <div>
//             <h2>Your Profile</h2>
//             {/* <div style={{
                
//                 justifyContent:"space-around",
//                 margin:"18px 0px",
//                 display:"flex",
//                 borderBottom:"1px solid grey"}}>
//                 <img style={{width:"160px",height:"160px",borderRadius:"80px"}}alt=""src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjye3VrRm41Xx8zRKhKG71wil7nERZoTxH4uTt2FwWdeatoTZB2wWVUIBMdTiNWSm64YbA_I9tyq8&usqp=CAU&ec=48665699"/>
//                 </div> */}
//             <div>
//             {/* <div style={{
//                  borderBottom:"1px solid grey"
//             }}>
//                 <center>
//                 { <Avatar
//                 width={150}
//                  height={100}
//                  onCrop={onCrop}
//                  onClose={onClose}
//                 src={src}
                
//                 /> } 
//                  {preview &&<img src={preview}/>}
//                 </center>  
//          </div> */}
         
//                 <h1>{getName}</h1>
//                 <h1>{getEmail}</h1>
                   
                
//                     {/* <div style={{display:"flex",justifyContent:"space-around",width:"108%"}}> */}
//                     {/* <h5>40posts</h5>
//                     <h5>40 followers</h5>
//                     <h5>40 following</h5> */}
//                 {/* </div> */}
               
        
           
//             </div>

//         </div>
//     )
// }
}