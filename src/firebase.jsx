import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfEtOOBaS4xPztgUazzQZOCADGFp4B3k4",
  authDomain: "cmsc4513-bmw-capstone.firebaseapp.com",
  projectId: "cmsc4513-bmw-capstone",
  storageBucket: "cmsc4513-bmw-capstone.appspot.com",
  messagingSenderId: "953111851263",
  appId: "1:953111851263:web:37470c2615f3f03a5c5cca",
  measurementId: "G-4577JPEND4",
};

const appF = initializeApp(firebaseConfig);
export const auth = getAuth(appF);
export const db = getFirestore(appF);
export default appF;
