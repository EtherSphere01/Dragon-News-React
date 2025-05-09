// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAqlsAyZ5I9HQ8kBnOT3EX7yETRSxhAYU",
  authDomain: "dragon-news-test25.firebaseapp.com",
  projectId: "dragon-news-test25",
  storageBucket: "dragon-news-test25.firebasestorage.app",
  messagingSenderId: "110641070240",
  appId: "1:110641070240:web:f61eaa468a3fefc9c809c5",
  measurementId: "G-4MEGZNQDBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
