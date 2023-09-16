// import { doc, getDoc } from "firebase/firestore/lite";
// import { useEffect, useState } from "react";
// import { db } from "./firebase";
// // import { getDoc } from "firebase/firestore/lite";

// export const useReadEmp = () => {
//   const [item, setItem] = useState([]);
//   //   useEffect(async function () {
//   useEffect(async function () {
//     const unWork = await db.collection("cities").onSnapshot((snap) => {
//       let fetched = snap.docs.map((doc) => {
//         return { ...doc.data(), id: doc.id };
//       });
//       setItem(fetched);
//       console.log(fetched);
//     });
//     return unWork;
//   }, []);
//   return { item };
// };

// //     async function woo() {
// //       const cityDoc = doc(db, `cities/DC`);
// //       const snapshot = await getDoc(cityDoc);
// //       console.log(snapshot.data());
// //     }
