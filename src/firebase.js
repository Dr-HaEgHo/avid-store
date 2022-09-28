// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGgG_gRkGZlU_ifEodO37w9wTfyEhWVSQ",
  authDomain: "avid-store-1345.firebaseapp.com",
  projectId: "avid-store-1345",
  storageBucket: "avid-store-1345.appspot.com",
  messagingSenderId: "528513136846",
  appId: "1:528513136846:web:4ff9acaad257cea398789f",
  measurementId: "G-E24QLYHSSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
} 