// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUWKyP99wxx2Z-LbEfwD4xuSFP7tOm57c",
  authDomain: "botanical-767fc.firebaseapp.com",
  projectId: "botanical-767fc",
  storageBucket: "botanical-767fc.firebasestorage.app",
  messagingSenderId: "1077124693202",
  appId: "1:1077124693202:web:41add6b443a6ed662b810b"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 const db = getFirestore();
 export default db;