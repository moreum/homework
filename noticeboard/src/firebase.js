import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDaW4E96HcDjTHE2PS7CoE3_7x0prmuJNg",
    authDomain: "board-f8994.firebaseapp.com",
    projectId: "board-f8994",
    storageBucket: "board-f8994.appspot.com",
    messagingSenderId: "812050224361",
    appId: "1:812050224361:web:c79aba9a9d2d5c25928c78",
    measurementId: "G-4NC0S38XMT"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };