import firebase from "firebase/app";

// 사용할 것들을 전부 불러옵니다 :)
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBF5P7JHeYW0VznGNY3va9YWSJ_Q3oBD2A",
    authDomain: "ndhomework-25087.firebaseapp.com",
    projectId: "ndhomework-25087",
    storageBucket: "ndhomework-25087.appspot.com",
    messagingSenderId: "584318251328",
    appId: "1:584318251328:web:62a001631f3e1971398aa5",
    measurementId: "G-JRQMWR64JG"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export { auth, apiKey, firestore, storage, realtime };