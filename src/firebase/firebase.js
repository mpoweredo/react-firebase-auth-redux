// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjTym4oTMkXmhJLUkc2KrfYSlMANrjaaY",
  authDomain: "react-auth-737ab.firebaseapp.com",
  projectId: "react-auth-737ab",
  storageBucket: "react-auth-737ab.appspot.com",
  messagingSenderId: "842948866077",
  appId: "1:842948866077:web:e29007b989bf3b0a3996f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app