// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuQq2Bb1r2Sc7mxCJmCJHfDHjWyVgp-3A",
  authDomain: "aems-7cd92.firebaseapp.com",
  projectId: "aems-7cd92",
  storageBucket: "aems-7cd92.appspot.com",
  messagingSenderId: "370158608880",
  appId: "1:370158608880:web:da04f52415c8a25fae7d35",
  measurementId: "G-5B9LNV4SL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };