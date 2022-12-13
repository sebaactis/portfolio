import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJWUmRZ6qnDAXG3E0iE0djqV6lNEHGx-Q",
  authDomain: "portfolio-e0ccd.firebaseapp.com",
  projectId: "portfolio-e0ccd",
  storageBucket: "portfolio-e0ccd.appspot.com",
  messagingSenderId: "49385519443",
  appId: "1:49385519443:web:2878fe904873336cbb89a6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const contactCollection = collection(db, "contacts");