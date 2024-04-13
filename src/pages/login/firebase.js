// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCTvv_UCAyew4CMHdJFMF43-HPKfGBg_EA",
  authDomain: "emailpassworddemo-9a197.firebaseapp.com",
  projectId: "emailpassworddemo-9a197",
  storageBucket: "emailpassworddemo-9a197.appspot.com",
  messagingSenderId: "798880728706",
  appId: "1:798880728706:web:12308d037750374028569b",
  measurementId: "G-TTWC8H54HV"
};

// Initialize Firebase
const login = initializeApp(firebaseConfig);
// export default login;
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((err) => {
//     console.log(err.code);
//     console.log(err.message);
//   });
