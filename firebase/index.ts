// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const devEnv = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

const prodEnv = { ...devEnv };

const firebaseConfig =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? prodEnv : devEnv;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
