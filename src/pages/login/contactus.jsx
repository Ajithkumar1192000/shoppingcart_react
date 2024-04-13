
import react from'react';
import { useRef } from 'react';
 import './styles2.css';
//  import styled from 'styled-components';


export const Contactus=()=>
{

  const name=useRef()
  const email=useRef();
  const feedback=useRef();
  const handleSubmit=()=>{
localStorage.setItem("name",name.current.value);
localStorage.setItem("email",email.current.value);
localStorage.setItem("feedback",feedback.current.value);
  }
     return(
        
    <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
       
          <div className="topic">Address</div>
          <div className="text-one">Anna nagar:Madurai</div>
          <div className="text-two">Gandhi nagar:Tambaram</div>
        </div>
        <div className="phone details">
         
          <div className="topic">Phone</div>
          <div className="text-one">+0098 9893 5647</div>
          <div className="text-two">+0096 3434 5678</div>
        </div>
        <div className="email details">
          
          <div className="topic">Email</div>
          <div className="text-one">abc@gmail.com</div>
          <div className="text-two">infoabc@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <div className='col-lg-6'>
          <input type="text" placeholder="Enter your name"ref={name}/>
          </div>
        </div>
        <div class="input-box">
        <div className='col-lg-6'>
          <input type="text" placeholder="Enter your email"ref={email}/>
          </div>
        </div>
        <div class="input-box message-box">
          <textarea id="textarea1"ref={feedback}></textarea>
        </div>
        <div class="button">
          {/* <input type="button" value="Send Now" /> */}
          <button className='btn btn-dark'onClick={()=>alert("thanks for you feedback")}>Send Now</button>
        </div>
      </form>
    </div>
    </div>
    </div>
 );
}
