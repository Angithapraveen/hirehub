import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyBDP7KMxgL0NrQutNJZYixc5MWh85mrJ8c",
    authDomain: "hirehub-71033.firebaseapp.com",
    projectId: "hirehub-71033",
    storageBucket: "hirehub-71033.appspot.com",
    messagingSenderId: "187404728498",
    appId: "1:187404728498:web:41030c80f1259691c871ab"
});


const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);


export {auth, firestore};