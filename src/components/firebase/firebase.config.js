// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI8vr2DKbD-y49E-SsAxrNfVJsYizWC2w",
  authDomain: "real-estate-c70dc.firebaseapp.com",
  projectId: "real-estate-c70dc",
  storageBucket: "real-estate-c70dc.firebasestorage.app",
  messagingSenderId: "357348593757",
  appId: "1:357348593757:web:5812f24bf312d33ba7fdb4"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
