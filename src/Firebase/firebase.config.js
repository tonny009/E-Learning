// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAh-p9wfWVnggnwCqronOGXOwVavASGAuM",
    authDomain: "web-development-courses.firebaseapp.com",
    projectId: "web-development-courses",
    storageBucket: "web-development-courses.appspot.com",
    messagingSenderId: "508377651008",
    appId: "1:508377651008:web:5cab5cbd8c4b59ce204ca5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;