// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSvetzdKTKLeSHhN2UeMOQPAjDwRpj1zQ",
  authDomain: "bdjobs-d0441.firebaseapp.com",
  projectId: "bdjobs-d0441",
  storageBucket: "bdjobs-d0441.appspot.com",
  messagingSenderId: "256516028421",
  appId: "1:256516028421:web:c545e86d25ac4cd47dc46c",
  measurementId: "G-6931W3NMJ9"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };