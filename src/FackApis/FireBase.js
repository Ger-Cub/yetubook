import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANRbDYeWCnyvWykTGh3Kbk9GfltwYFOuY",
    authDomain: "yetusapp.firebaseapp.com",
    projectId: "yetusapp",
    storageBucket: "yetusapp.appspot.com",
    messagingSenderId: "498871550076",
    appId: "1:498871550076:web:f130c8b456f827ed6d89f9",
    measurementId: "G-L7FPE0XQK9"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }