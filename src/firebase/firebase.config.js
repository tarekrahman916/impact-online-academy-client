// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAgH9K4trAnVlOu2r5rZzRXhJXqKNeav-o",
  // authDomain: "impact-academy-ae236.firebaseapp.com",
  // projectId: "impact-academy-ae236",
  // storageBucket: "impact-academy-ae236.appspot.com",
  // messagingSenderId: "535819124279",
  // appId: "1:535819124279:web:97067cfdead208c99209b2",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
