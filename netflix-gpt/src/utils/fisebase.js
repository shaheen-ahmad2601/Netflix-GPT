// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0CO0q2nAQZamQK7JM2nwstGX80PXraiE",
  authDomain: "netflixgpt-d1e72.firebaseapp.com",
  projectId: "netflixgpt-d1e72",
  storageBucket: "netflixgpt-d1e72.appspot.com",
  messagingSenderId: "258798246592",
  appId: "1:258798246592:web:d1caaa2ad7cc60da6eab25",
  measurementId: "G-ESVSLY78D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);