// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYtIACam16BjS9kMuK3zXZS3FqbDcyptM",
    authDomain: "betting-3dc5b.firebaseapp.com",
    projectId: "betting-3dc5b",
    storageBucket: "betting-3dc5b.appspot.com",
    messagingSenderId: "905678790244",
    appId: "1:905678790244:web:fdcdc3274f2e05344a4971"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const realtimeDB = getDatabase(app);

const auth = getAuth(app);
const userDB = getFirestore(app);

export {
    realtimeDB,
    userDB,
    auth,
    app
}