// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfW8UTZaC8eJukmCcgk4umNWfXtaGW6QM",
    authDomain: "email-authentication-f4112.firebaseapp.com",
    projectId: "email-authentication-f4112",
    storageBucket: "email-authentication-f4112.appspot.com",
    messagingSenderId: "125112998705",
    appId: "1:125112998705:web:beb585f53dbe1190c36e10"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;