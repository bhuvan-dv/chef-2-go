// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF__NppoD_Q1XaA__0YFVyEb87Iq2IUEE",
  authDomain: "web-design-project-407607.firebaseapp.com",
  projectId: "web-design-project-407607",
  storageBucket: "web-design-project-407607.appspot.com",
  messagingSenderId: "481771446203",
  appId: "1:481771446203:web:711c20be5c59712951ee9e",
  measurementId: "G-NBL2WN7Q5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;