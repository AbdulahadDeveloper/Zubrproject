import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDLbYEEx6SgLVe-gcMVhsDSPz2af7bf_Zs",
  authDomain: "zubr-92712.firebaseapp.com",
  projectId: "zubr-92712",
  storageBucket: "zubr-92712.appspot.com",
  messagingSenderId: "1095810680647",
  appId: "1:1095810680647:web:6d90a956898a4f75df6e62",
  measurementId: "G-1GVJ1NFWZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};