import { createContext, useContext, useEffect } from "react";
import { useConFast } from "./ContextProject";
import { db } from "../services/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

const ContextDataCon = createContext();
function ContextFetchData({ children }) {
  const {
    pageSize,
    setIsLoading,
    setDataInc,
    setDataEmp,
    setIsError,
    setLastPageEmp,
    setLastPageInc,
  } = useConFast();
  function FetchEmployees() {
    useEffect(() => {
      const q = query(collection(db, "employees"));
      onSnapshot(q, (QuerySnapshot) => {
        setIsLoading(true);
        const data = [];
        QuerySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setDataEmp(data);
        setLastPageEmp(Math.ceil(data.length / pageSize));
        setIsLoading(false);
      });
      if (navigator.onLine) {
        setIsError(false);
      } else {
        setIsError(true);
      }
    }, []);
  }
  function FetchIncomes() {
    useEffect(() => {
      const q = query(collection(db, "incomes"));
      onSnapshot(q, (QuerySnapshot) => {
        setIsLoading(true);
        const data = [];
        QuerySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setDataInc(data);
        setLastPageInc(Math.ceil(data.length / pageSize));
        setIsLoading(false);
      });
      if (navigator.onLine) {
        setIsError(false);
      } else {
        setIsError(true);
      }
    }, []);
  }
  return (
    <ContextDataCon.Provider value={{ FetchIncomes, FetchEmployees }}>
      {children}
    </ContextDataCon.Provider>
  );
}

function useConData() {
  const context = useContext(ContextDataCon);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}
export { ContextFetchData, useConData };
