// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm1nl7sme5yWLYxZAGCFb95ou77h1xc3o",
  authDomain: "vue-register-adfe1.firebaseapp.com",
  databaseURL:
    "https://vue-register-adfe1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-register-adfe1",
  storageBucket: "vue-register-adfe1.appspot.com",
  messagingSenderId: "546802709441",
  appId: "1:546802709441:web:671615fc030d377dc0b540",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
