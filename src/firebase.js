import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAfEtOOBaS4xPztgUazzQZOCADGFp4B3k4",
	authDomain: "cmsc4513-bmw-capstone.firebaseapp.com",
	projectId: "cmsc4513-bmw-capstone",
	storageBucket: "cmsc4513-bmw-capstone.appspot.com",
	messagingSenderId: "953111851263",
	appId: "1:953111851263:web:37470c2615f3f03a5c5cca",
	measurementId: "G-4577JPEND4"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;