// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth'; // Ensure signOut is imported
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc_bPPRikRDG8quSJlsHxb-pNNeODHcGw",
  authDomain: "health-track-j01.firebaseapp.com",
  projectId: "health-track-j01",
  storageBucket: "health-track-j01.appspot.com",
  messagingSenderId: "399955719981",
  appId: "1:399955719981:web:a65e4619e7b266b7f4c5a4",
  measurementId: "G-2QRJJ177XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


const logOut = () => {
  const auth = getAuth(); 
  return signOut(auth);
};

export { db, auth, storage, logOut };
