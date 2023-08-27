import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {

  apiKey: "AIzaSyAEO15q3Czrt_iOcPelmsv09f0lxcCqu8E",
  authDomain: "miniblog-react-7c6c2.firebaseapp.com",
  projectId: "miniblog-react-7c6c2",
  storageBucket: "miniblog-react-7c6c2.appspot.com",
  messagingSenderId: "541385590808",
  appId: "1:541385590808:web:b5bd097b42c418fca15b6d",
  measurementId: "G-4WB8070F0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export {db};