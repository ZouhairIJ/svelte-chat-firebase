import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbYKgLnYB__6uNjdqdfBnh-ME_RjxkEEo",
    authDomain: "realtime-chatapp-34788.firebaseapp.com",
    projectId: "realtime-chatapp-34788",
    storageBucket: "realtime-chatapp-34788.appspot.com",
    messagingSenderId: "176576953432",
    appId: "1:176576953432:web:eea18ff4643842e7a7de2d"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();