import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig ={
    apiKey: "AIzaSyAwCV3a4X8iC_MVV1iWyq7LA2EfUNMCSNk",
    authDomain: "react-homework01.firebaseapp.com",
    projectId: "react-homework01",
    storageBucket: "react-homework01.appspot.com",
    messagingSenderId: "118577565537",
    appId: "1:118577565537:web:99ed8f48e4de9c29eb3f20",
    measurementId: "G-L2S19D6ZJ4",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
export {auth, apiKey};