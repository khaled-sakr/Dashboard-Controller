// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIPYafRn7eh35Gv-yQwBg-qE9ARnw0zJg",
  authDomain: "dashboard-9a57f.firebaseapp.com",
  projectId: "dashboard-9a57f",
  storageBucket: "dashboard-9a57f.appspot.com",
  messagingSenderId: "976057815760",
  appId: "1:976057815760:web:26fbfe36a0a25f818dc4d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//////////////////

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getPerformance } from "firebase/performance";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAIPYafRn7eh35Gv-yQwBg-qE9ARnw0zJg",
//   authDomain: "dashboard-9a57f.firebaseapp.com",
//   projectId: "dashboard-9a57f",
//   storageBucket: "dashboard-9a57f.appspot.com",
//   messagingSenderId: "976057815760",
//   appId: "1:976057815760:web:26fbfe36a0a25f818dc4d5",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// //type the auth and firestore functions
// const auth = getAuth();
// const db = getFirestore(app);
// const performance = getPerformance(app);
// const storage = getStorage(app);

// export { analytics, auth, db, performance, storage };
