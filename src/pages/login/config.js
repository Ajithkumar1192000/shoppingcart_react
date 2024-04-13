// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth,GoogleAuthProvider} from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyCGqUbwXK2IBY09Cy2BC0uEMLyvqSGw3mY",
//   authDomain: "logindemo-f9315.firebaseapp.com",
//   projectId: "logindemo-f9315",
//   storageBucket: "logindemo-f9315.appspot.com",
//   messagingSenderId: "1026313184220",
//   appId: "1:1026313184220:web:1d9f7cd17edc22d2ba6519",
//   measurementId: "G-79N414WPFX"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth=getAuth(app);
// const provider=new GoogleAuthProvider();
// export {auth,provider};
// const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAQZ2fUjRSnW65wdOgKp-ag3a6DHYRR-2k",
  authDomain: "demologin-667f9.firebaseapp.com",
  projectId: "demologin-667f9",
  storageBucket: "demologin-667f9.appspot.com",
  messagingSenderId: "352722348597",
  appId: "1:352722348597:web:39bc06203fe9e8ff019f7c",
  measurementId: "G-MFKJJT5V08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
 const provider=new GoogleAuthProvider();
 export {auth,provider};