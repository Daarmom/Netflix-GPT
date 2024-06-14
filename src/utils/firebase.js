// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqQcXebV0fCnB9Fr0R8Tx31W2A3dfcoa0",
  authDomain: "netflix-gpt-4c95f.firebaseapp.com",
  projectId: "netflix-gpt-4c95f",
  storageBucket: "netflix-gpt-4c95f.appspot.com",
  messagingSenderId: "794691819",
  appId: "1:794691819:web:5530584227479d90d396ae",
  measurementId: "G-S2Q78E5GRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();