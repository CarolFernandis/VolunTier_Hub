// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_5-0b6N8CPTRL2z0lFCNaDW_F6MSoBGk",
  authDomain: "voluntier-hub.firebaseapp.com",
  projectId: "voluntier-hub",
  storageBucket: "voluntier-hub.appspot.com",
  messagingSenderId: "546339781157",
  appId: "1:546339781157:web:2f73d51039a3febf1b5dcc",
  measurementId: "G-8T4701GHPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
