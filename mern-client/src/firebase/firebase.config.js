// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPiGL9452YZGNF-s7qh8zBL7tI-UjHLtc",
  authDomain: "mern-server-inventory.firebaseapp.com",
  projectId: "mern-server-inventory",
  storageBucket: "mern-server-inventory.appspot.com",
  messagingSenderId: "501291265068",
  appId: "1:501291265068:web:821ce250799eefa7893589",
  databaseURL: "https://mern-server-inventory-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;