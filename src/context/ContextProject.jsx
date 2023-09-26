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
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "../services/firebase";
import { formatDate } from "./date";
const ContextProjectPro = createContext();
//

function ContextProject({ children }) {
  //
  const [openedModal, setOpenedModal] = useState(false);
  const [openedModal2, setOpenedModal2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dataInc, setDataInc] = useState([]);
  const [dataEmp, setDataEmp] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentId, setCurrentId] = useState([]);
  const [lastPage, setLastPage] = useState(
    Math.floor(dataEmp.length / 6) + 1 || Math.floor(dataInc.length / 6) + 1
  );
  const [page, setPage] = useState(1);
  const today = formatDate(new Date());
  const pageSize = 4;
  //////////////////////////////
  // total fetch
  const Change = useCallback((type) => {
    function Change() {
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
          if (type === "incomes") {
            setDataInc(data);
          } else if (type === "employees") {
            setDataEmp(data);
          }
          setIsLoading(false);
          setLastPage(Math.floor(data.length / 6) + 1);
        });
        if (navigator.onLine) {
          setIsError(false);
        } else {
          setIsError(true);
        }
      }, [type]);
    }
    Change();
  }, []);
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
        dataInc,
        setDataInc,
        dataEmp,
        setDataEmp,
        Change,
        deleteItem,
        AddItem,
        updateItem,
        currentData,
        setCurrentData,
        currentId,
        setCurrentId,
        today,
        lastPage,
        page,
        setPage,
        pageSize,
        setLastPage,
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
