// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSyUzB_pG1Skk6gpMK51JQL8o8Cnm4DHI",
  authDomain: "tienda-coderhouse-38bd5.firebaseapp.com",
  projectId: "tienda-coderhouse-38bd5",
  storageBucket: "tienda-coderhouse-38bd5.appspot.com",
  messagingSenderId: "739476582516",
  appId: "1:739476582516:web:8fdcd0e520f0cf45632121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);