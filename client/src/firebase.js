// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c8ef2.firebaseapp.com",
  projectId: "mern-estate-c8ef2",
  storageBucket: "mern-estate-c8ef2.appspot.com",
  messagingSenderId: "37550514082",
  appId: "1:37550514082:web:8d3d958fd7b0f69f3d1cfb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);