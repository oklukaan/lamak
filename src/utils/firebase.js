// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk066Eqo1NO6MvPifkAw6M7o5F5nYsKAE",
  authDomain: "ufublog.firebaseapp.com",
  projectId: "ufublog",
  storageBucket: "ufublog.appspot.com",
  messagingSenderId: "1048603191244",
  appId: "1:1048603191244:web:5b5ea3409d1f67f76bdf69",
  measurementId: "G-FDS9WQ2VMQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);