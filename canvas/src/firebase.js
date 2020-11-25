import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = { 
    // Add your config here
    apiKey: "AIzaSyAXKBV3XMmfXK6idyxkqkusVthFcs3yaJs",
    authDomain: "vue-firebase-99a10.firebaseapp.com",
    databaseURL: "https://vue-firebase-99a10.firebaseio.com",
    projectId: "vue-firebase-99a10",
    storageBucket: "vue-firebase-99a10.appspot.com",
    messagingSenderId: "851903617033",
    appId: "1:851903617033:web:2ac1e07ee8a216d43040d8"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();