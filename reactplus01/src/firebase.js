import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig ={
        apiKey: "AIzaSyAwCV3a4X8iC_MVV1iWyq7LA2EfUNMCSNk",
        authDomain: "react-homework01.firebaseapp.com",
        projectId: "react-homework01",
        storageBucket: "react-homework01.appspot.com",
        messagingSenderId: "118577565537",
        appId: "1:118577565537:web:e0b35fc1d381ce6feb3f20",
        measurementId: "G-4YQWTG4PH4"
     
}

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};