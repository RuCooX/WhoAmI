import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD_ROlYK6biBugAiQ4HmIeXzGpTy0d0R5U",
    authDomain: "whoami-32e14.firebaseapp.com",
    projectId: "whoami-32e14",
    storageBucket: "whoami-32e14.appspot.com",
    messagingSenderId: "601679677758",
    appId: "1:601679677758:web:348d4cd814bce98d97846f",
    measurementId: "G-EFEKWPS3X8"
});
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebaseConfig;