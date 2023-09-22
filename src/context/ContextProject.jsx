// import { collection, onSnapshot, query } from "firebase/firestore";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../services/firebase";
const ContextProjectPro = createContext();
//

function ContextProject({ children }) {
  //
  const [openedModal, setOpenedModal] = useState(false);
  const [openedModal2, setOpenedModal2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setdata] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentId, setCurrentId] = useState([]);
  ////////////////////////////
  // total fetch
  function Change(type) {
    useEffect(() => {
      const q = query(
        collection(db, `${type === "incomes" ? "incomes" : "employees"}`)
      );
      setIsLoading(true);
      onSnapshot(q, (QuerySnapshot) => {
        const data = [];
        QuerySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setdata(data);
        setIsLoading(false);
      });
      if (navigator.onLine) {
        setIsError(false);
      } else {
        setIsError(true);
      }
    }, [type]);
  }
  async function AddItem(data, type) {
    setIsLoading(true);
    await addDoc(
      collection(db, `${type === "incomes" ? "incomes" : "employees"}`),
      data
    );
    setIsLoading(false);
  }
  ////////////////////////
  ///delete Item
  function deleteItem(type, id) {
    deleteDoc(doc(db, `${type === "employees" ? "employees" : "incomes"}`, id));
  }
  // useEffect(() => {
  //   const q = query(collection(db, "incomes"));
  //   setIsLoading(true);
  //   onSnapshot(q, (QuerySnapshot) => {
  //     const data = [];
  //     QuerySnapshot.forEach((doc) => {
  //       data.push({ ...doc.data(), id: doc.id });
  //     });
  //     setdata(data);
  //     setIsLoading(false);
  //   });
  //   if (navigator.onLine) {
  //     setIsError(false);
  //     // console.log(window.width());
  //   } else {
  //     setIsError(true);
  //   }
  // }, [setIsLoading, setdata, setIsError]);

  //////////////////
  //update data
  async function updateItem(data, type) {
    await updateDoc(doc(db, type, currentId), data);
  }

  return (
    <ContextProjectPro.Provider
      value={{
        openedModal,
        setOpenedModal,
        openedModal2,
        setOpenedModal2,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        data,
        setdata,
        Change,
        deleteItem,
        AddItem,
        updateItem,
        currentData,
        setCurrentData,
        currentId,
        setCurrentId,
      }}
    >
      {children}
    </ContextProjectPro.Provider>
  );
}
function useConFast() {
  const context = useContext(ContextProjectPro);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}
export { ContextProject, useConFast };
