// import { collection, onSnapshot, query } from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../services/firebase";
// import { db } from "../services/firebase";
const ContextProjectPro = createContext();
//

function ContextProject({ children }) {
  //

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setdata] = useState([]);
  function deleteItem(type, id) {
    deleteDoc(doc(db, `${type === "employees" ? "employees" : "incomes"}`, id));
  }

  return (
    <ContextProjectPro.Provider
      value={{
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        data,
        setdata,
        deleteItem,
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
