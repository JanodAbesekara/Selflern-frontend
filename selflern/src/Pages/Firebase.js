// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
 

const firebaseConfig = {
  apiKey: "AIzaSyA94f-WOae0ej4GzglmeE6KD3OAl48ynYM",
  authDomain: "selflearnner.firebaseapp.com",
  projectId: "selflearnner",
  storageBucket: "selflearnner.firebasestorage.app",
  messagingSenderId: "225665452101",
  appId: "1:225665452101:web:6f2b3936f585ef66f9bb2c",
//   measurementId: "G-LNREN637ZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);