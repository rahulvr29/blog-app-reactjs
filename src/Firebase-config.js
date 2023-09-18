// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVbXQ9vdQhdBFfT8vb9OMG0go_hnJVUbA",
  authDomain: "blogapp-c8cd7.firebaseapp.com",
  projectId: "blogapp-c8cd7",
  storageBucket: "blogapp-c8cd7.appspot.com",
  messagingSenderId: "324344033934",
  appId: "1:324344033934:web:d1cf638e060582e0be4fdf",
  measurementId: "G-X2D7V3HLZ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
