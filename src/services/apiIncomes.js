// import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
// import { db } from "../services/firebase";

// // export async function findAll() {
// //   let data = [];
// //   const q = query(collection(db, "employees"));
// //   onSnapshot(q, (QuerySnapshot) => {
// //     let employees = [];
// //     QuerySnapshot.forEach((doc) => {
// //       employees.push({ ...doc.data(), id: doc.id });
// //     });
// //     data = data.push(employees);
// //   });
// //   return data[0];
// // }
// // export async function findAll() {
// //   let data = [];
// //   const q = query(collection(db, "employees"));
// //   onSnapshot(q, (QuerySnapshot) => {
// //     const data1 = [];
// //     QuerySnapshot.forEach((doc) => {
// //       data1.push({ ...doc.data(), id: doc.id });
// //     });
// //     data.push(data1);
// //     data = data[0];
// //   });
// //   console.log(data);
// //   return data;
// // }

// // export function findAll() {
// //   const q = query(collection(db, "incomes"));
// //   const data = [];
// //   onSnapshot(q, (QuerySnapshot) =>
// //     QuerySnapshot.forEach((doc) => {
// //       data.push({ ...doc.data(), id: doc.id });
// //     })
// //   );
// //   console.log(data);
// //   return data;
// // }

// // export async function findAll() {
// //   const docRefs = await getDocs(collection(db, "incomes"));
// //   const data = [];
// //   docRefs.forEach((doc) => {
// //     data.push({ ...doc.data(), id: doc.id });
// //   });
// //   console.log(data);
// //   return data;
// // }
// // export async function findAllTest() {}
// import { useFirestoreQuery } from "@react-query-firebase/firestore";
// function Deals() {
//   // Define a query reference using the Firebase SDK
//   const ref = query(collection(db, "incomes"));

//   // Provide the query to the hook
//   const query = useFirestoreQuery(["products"], ref);

//   if (query.isLoading) {
//     return <div>Loading...</div>;
//   }

//   const snapshot = query.data;

//   return snapshot.docs.map((docSnapshot) => {
//     const data = docSnapshot.data();

//     return <div key={docSnapshot.id}>{data.name}</div>;
//   });
// }
