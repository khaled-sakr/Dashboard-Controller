import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../services/firebase";

// export async function findAll() {
//   let data = [];
//   const q = query(collection(db, "employees"));
//   onSnapshot(q, (QuerySnapshot) => {
//     let employees = [];
//     QuerySnapshot.forEach((doc) => {
//       employees.push({ ...doc.data(), id: doc.id });
//     });
//     data = data.push(employees);
//   });
//   return data[0];
// }
export async function findAll() {
  let data = [];
  const q = query(collection(db, "employees"));
  onSnapshot(q, (QuerySnapshot) => {
    const data1 = [];
    QuerySnapshot.forEach((doc) => {
      data1.push({ ...doc.data(), id: doc.id });
    });
    data.push(data1);
    data = data[0];
  });
  console.log(data);
  return data;
}
