// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLT46YUA20c-ataoFpvUnOGv0kxJSB8vg",
  authDomain: "netflixgpt-ac064.firebaseapp.com",
  projectId: "netflixgpt-ac064",
  storageBucket: "netflixgpt-ac064.appspot.com",
  messagingSenderId: "247922031678",
  appId: "1:247922031678:web:1c48a138be2bdbe5b1656f",
  measurementId: "G-NLPWG0DX3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();

console.log(analytics);
