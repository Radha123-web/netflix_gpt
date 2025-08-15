// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrxPG4M2c_SB89v5kRADdr9eVSC7tWGpE",
  authDomain: "netflixgpt-390f5.firebaseapp.com",
  projectId: "netflixgpt-390f5",
  storageBucket: "netflixgpt-390f5.firebasestorage.app",
  messagingSenderId: "34827370644",
  appId: "1:34827370644:web:fe3b41a949894accc67481",
  measurementId: "G-Y33QLF0KFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();