import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyAIPYafRn7eh35Gv-yQwBg-qE9ARnw0zJg",
  // authDomain: "dashboard-9a57f.firebaseapp.com",
  // projectId: "dashboard-9a57f",
  // storageBucket: "dashboard-9a57f.appspot.com",
  // messagingSenderId: "976057815760",
  // appId: "1:976057815760:web:26fbfe36a0a25f818dc4d5",
  apiKey: "AIzaSyCyxSCvE40LppE7PEbPFIC9k1lVPCfh74Q",
  authDomain: "vanilla-co.firebaseapp.com",
  projectId: "vanilla-co",
  storageBucket: "vanilla-co.appspot.com",
  messagingSenderId: "479440018953",
  appId: "1:479440018953:web:39f2589a29461372f862d8",
  measurementId: "G-000KRTL7RT",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
