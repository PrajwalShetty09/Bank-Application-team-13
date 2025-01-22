// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgBrIC1mti0PZtounxN174Uz9NifISwds",
  authDomain: "bank-7ed42.firebaseapp.com",
  projectId: "bank-7ed42",
  storageBucket: "bank-7ed42.firebasestorage.app",
  messagingSenderId: "486536180447",
  appId: "1:486536180447:web:36eb5945ab9018f2c06f6a"
};
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);//commit
