import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAvuOqDl4UjGRCUKEazE6WOehVbdLN6Gz4",
  authDomain: "laundry-application-9f087.firebaseapp.com",
  projectId: "laundry-application-9f087",
  storageBucket: "laundry-application-9f087.appspot.com",
  messagingSenderId: "122161917083",
  appId: "1:122161917083:web:6ea20d7668bc4292f76a3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore()

export {auth, db}