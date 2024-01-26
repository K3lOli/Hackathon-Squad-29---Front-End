import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpX8iWkuF-syhe7n-e1NfQp53prQPQSpE",
    authDomain: "hackathon-fcamara-f0e3e.firebaseapp.com",
    projectId: "hackathon-fcamara-f0e3e",
    storageBucket: "hackathon-fcamara-f0e3e.appspot.com",
    messagingSenderId: "20509515043",
    appId: "1:20509515043:web:d7d7f01eb6547eba750096",
    measurementId: "G-SD9H0GQ1RG",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
