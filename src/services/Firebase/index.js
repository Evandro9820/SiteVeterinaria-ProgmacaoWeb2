// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHjv8OSPo2ItXzrhmkC8DaB5nXNDV0G04",
  authDomain: "veterinariaprogweb2.firebaseapp.com",
  projectId: "veterinariaprogweb2",
  storageBucket: "veterinariaprogweb2.appspot.com",
  messagingSenderId: "894039614551",
  appId: "1:894039614551:web:6f707411f31c3e21072f12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
