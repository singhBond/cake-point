// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAmpgrg1QYQwXWWVVZEL7V6istBCQ11PeU",
  authDomain: "cake-point-f3383.firebaseapp.com",
  projectId: "cake-point-f3383",
  storageBucket: "cake-point-f3383.firebasestorage.app",
  messagingSenderId: "331370118438",
  appId: "1:331370118438:web:8600e586f14786a10915e7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore & Storage
export const db = getFirestore(app);
export const storage = getStorage(app);

// Optional: Export app if needed elsewhere
export default app;