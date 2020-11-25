import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    // Add your config here
    apiKey: "AIzaSyAsBkU7NKqKn9gAV07V_21AkQMw3ZJQ9hQ",
    authDomain: "canvas-2fdd2.firebaseapp.com",
    databaseURL: "https://canvas-2fdd2.firebaseio.com",
    projectId: "canvas-2fdd2",
    storageBucket: "canvas-2fdd2.appspot.com",
    messagingSenderId: "989212373436",
    appId: "1:989212373436:web:2491b895c5a13ec3007bb9"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();