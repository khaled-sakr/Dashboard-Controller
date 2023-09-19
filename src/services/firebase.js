import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIPYafRn7eh35Gv-yQwBg-qE9ARnw0zJg",
  authDomain: "dashboard-9a57f.firebaseapp.com",
  projectId: "dashboard-9a57f",
  storageBucket: "dashboard-9a57f.appspot.com",
  messagingSenderId: "976057815760",
  appId: "1:976057815760:web:26fbfe36a0a25f818dc4d5",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
